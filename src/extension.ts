import * as vscode from 'vscode';
import { exec } from 'child_process';
import { existsSync } from 'fs';

const SUPPORTED_EXTENSIONS = ['.md', '.markdown', '.mdown', '.mkd', '.adoc', '.asciidoc'];

function isSupportedFile(filePath: string): boolean {
  const ext = filePath.toLowerCase().substring(filePath.lastIndexOf('.'));
  return SUPPORTED_EXTENSIONS.includes(ext);
}

function getMarkedAppPath(): string {
  const config = vscode.workspace.getConfiguration('openInMarked2');
  return config.get<string>('appPath', '/Applications/Marked 2.app');
}

async function openInMarked2(uri?: vscode.Uri): Promise<void> {
  let filePath: string;

  if (uri) {
    filePath = uri.fsPath;
  } else {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active file to open');
      return;
    }
    filePath = editor.document.uri.fsPath;
  }

  if (!isSupportedFile(filePath)) {
    vscode.window.showErrorMessage('Current file is not a supported file type');
    return;
  }

  const appPath = getMarkedAppPath();

  if (!existsSync(appPath)) {
    vscode.window.showErrorMessage(
      `Marked 2 not found at "${appPath}". Please install Marked 2 or configure the path in settings.`,
      'Open Settings'
    ).then((selection: string | undefined) => {
      if (selection === 'Open Settings') {
        vscode.commands.executeCommand('workbench.action.openSettings', 'openInMarked2.appPath');
      }
    });
    return;
  }

  const command = `open -a "${appPath}" "${filePath}"`;

  exec(command, (error: Error | null) => {
    if (error) {
      vscode.window.showErrorMessage(`Failed to open in Marked 2: ${error.message}`);
    }
  });
}

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('openInMarked2.open', openInMarked2);
  context.subscriptions.push(disposable);
}

export function deactivate(): void {
  // Nothing to clean up
}
