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

function shouldAutoSave(): boolean {
  const config = vscode.workspace.getConfiguration('openInMarked2');
  return config.get<boolean>('autoSave', true);
}

async function openInMarked2(uri?: vscode.Uri): Promise<void> {
  let filePath: string;
  let document: vscode.TextDocument | undefined;

  if (uri) {
    filePath = uri.fsPath;
  } else {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active file to open');
      return;
    }
    filePath = editor.document.uri.fsPath;
    document = editor.document;
  }

  if (document && document.isDirty && shouldAutoSave()) {
    await document.save();
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

async function openFolderInMarked2(uri?: vscode.Uri): Promise<void> {
  let folderPath: string;

  if (uri) {
    folderPath = uri.fsPath;
  } else {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders || workspaceFolders.length === 0) {
      vscode.window.showErrorMessage('No workspace folder open');
      return;
    }
    folderPath = workspaceFolders[0].uri.fsPath;
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

  const command = `open -a "${appPath}" "${folderPath}"`;

  exec(command, (error: Error | null) => {
    if (error) {
      vscode.window.showErrorMessage(`Failed to open folder in Marked 2: ${error.message}`);
    }
  });
}

let statusBarItem: vscode.StatusBarItem;

function shouldShowStatusBar(): boolean {
  const config = vscode.workspace.getConfiguration('openInMarked2');
  return config.get<boolean>('showStatusBar', true);
}

function updateStatusBarVisibility(): void {
  if (!shouldShowStatusBar()) {
    statusBarItem.hide();
    return;
  }
  const editor = vscode.window.activeTextEditor;
  if (editor && isSupportedFile(editor.document.uri.fsPath)) {
    statusBarItem.show();
  } else {
    statusBarItem.hide();
  }
}

export function activate(context: vscode.ExtensionContext): void {
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.text = '$(eye) Marked 2';
  statusBarItem.tooltip = 'Open in Marked 2';
  statusBarItem.command = 'openInMarked2.open';

  context.subscriptions.push(
    vscode.commands.registerCommand('openInMarked2.open', openInMarked2),
    vscode.commands.registerCommand('openInMarked2.openFolder', openFolderInMarked2),
    statusBarItem,
    vscode.window.onDidChangeActiveTextEditor(updateStatusBarVisibility),
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('openInMarked2.showStatusBar')) {
        updateStatusBarVisibility();
      }
    })
  );

  updateStatusBarVisibility();
}

export function deactivate(): void {
  if (statusBarItem) {
    statusBarItem.dispose();
  }
}
