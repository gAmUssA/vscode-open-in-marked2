SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules
.RECIPEPREFIX = >

ifeq ($(origin .RECIPEPREFIX), undefined)
  $(error This Make does not support .RECIPEPREFIX. Please use GNU Make 4.0 or later)
endif

# Colors
RED := \033[31m
GREEN := \033[32m
YELLOW := \033[33m
BLUE := \033[34m
RESET := \033[0m

.DEFAULT_GOAL := help

.PHONY: help install build watch compile lint package clean publish publish-vscode publish-openvsx test status

##@ General

help: ## Show this help message
> @echo ""
> @echo "$(BLUE)Better Open in Marked2 - VS Code Extension$(RESET)"
> @echo ""
> @awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make $(YELLOW)<target>$(RESET)\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  $(GREEN)%-20s$(RESET) %s\n", $$1, $$2 } /^##@/ { printf "\n$(BLUE)%s$(RESET)\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

status: ## Show project status
> @echo "$(BLUE)📊 Project Status$(RESET)"
> @echo ""
> @echo "$(YELLOW)Version:$(RESET) $$(node -p "require('./package.json').version")"
> @echo "$(YELLOW)Name:$(RESET) $$(node -p "require('./package.json').displayName")"
> @echo ""
> @if [ -f "dist/extension.js" ]; then \
>   echo "$(GREEN)✓$(RESET) Extension built"; \
> else \
>   echo "$(RED)✗$(RESET) Extension not built (run 'make build')"; \
> fi
> @if ls *.vsix 1> /dev/null 2>&1; then \
>   echo "$(GREEN)✓$(RESET) VSIX package exists: $$(ls *.vsix)"; \
> else \
>   echo "$(YELLOW)○$(RESET) No VSIX package (run 'make package')"; \
> fi

##@ Development

install: ## Install dependencies
> @echo "$(BLUE)📦 Installing dependencies...$(RESET)"
> npm ci
> @echo "$(GREEN)✓ Dependencies installed$(RESET)"

build: ## Build the extension
> @echo "$(BLUE)🔨 Building extension...$(RESET)"
> npm run build
> @echo "$(GREEN)✓ Build complete$(RESET)"

watch: ## Watch for changes and rebuild
> @echo "$(BLUE)👀 Watching for changes...$(RESET)"
> npm run build:watch

compile: ## Compile TypeScript
> @echo "$(BLUE)📝 Compiling TypeScript...$(RESET)"
> npm run compile
> @echo "$(GREEN)✓ Compilation complete$(RESET)"

lint: ## Run ESLint
> @echo "$(BLUE)🔍 Running linter...$(RESET)"
> npm run lint
> @echo "$(GREEN)✓ Linting complete$(RESET)"

##@ Packaging

package: build ## Package extension as VSIX
> @echo "$(BLUE)📦 Packaging extension...$(RESET)"
> npx vsce package
> @echo "$(GREEN)✓ Package created: $$(ls *.vsix)$(RESET)"

clean: ## Clean build artifacts
> @echo "$(BLUE)🧹 Cleaning...$(RESET)"
> rm -rf dist/
> rm -rf out/
> rm -f *.vsix
> @echo "$(GREEN)✓ Clean complete$(RESET)"

##@ Publishing

publish: publish-vscode publish-openvsx ## Publish to both marketplaces

publish-vscode: package ## Publish to VS Code Marketplace
> @echo "$(BLUE)🚀 Publishing to VS Code Marketplace...$(RESET)"
> @if [ -z "$${VSCE_PAT:-}" ]; then \
>   echo "$(RED)Error: VSCE_PAT environment variable not set$(RESET)"; \
>   echo "Set it with: export VSCE_PAT=your-token"; \
>   exit 1; \
> fi
> npx vsce publish -p $$VSCE_PAT
> @echo "$(GREEN)✓ Published to VS Code Marketplace$(RESET)"

publish-openvsx: package ## Publish to Open VSX Registry
> @echo "$(BLUE)🚀 Publishing to Open VSX Registry...$(RESET)"
> @if [ -z "$${OVSX_PAT:-}" ]; then \
>   echo "$(RED)Error: OVSX_PAT environment variable not set$(RESET)"; \
>   echo "Set it with: export OVSX_PAT=your-token"; \
>   exit 1; \
> fi
> npx ovsx publish -p $$OVSX_PAT
> @echo "$(GREEN)✓ Published to Open VSX Registry$(RESET)"

##@ Version Management

bump-patch: ## Bump patch version (x.x.X)
> @echo "$(BLUE)📈 Bumping patch version...$(RESET)"
> npm version patch
> @echo "$(GREEN)✓ Version bumped to $$(node -p "require('./package.json').version")$(RESET)"

bump-minor: ## Bump minor version (x.X.0)
> @echo "$(BLUE)📈 Bumping minor version...$(RESET)"
> npm version minor
> @echo "$(GREEN)✓ Version bumped to $$(node -p "require('./package.json').version")$(RESET)"

bump-major: ## Bump major version (X.0.0)
> @echo "$(BLUE)📈 Bumping major version...$(RESET)"
> npm version major
> @echo "$(GREEN)✓ Version bumped to $$(node -p "require('./package.json').version")$(RESET)"

##@ Local Testing

install-local: package ## Install extension locally in VS Code
> @echo "$(BLUE)💻 Installing extension locally...$(RESET)"
> code --install-extension $$(ls *.vsix)
> @echo "$(GREEN)✓ Extension installed locally$(RESET)"

uninstall-local: ## Uninstall extension from VS Code
> @echo "$(BLUE)🗑️  Uninstalling extension...$(RESET)"
> code --uninstall-extension vikgamov.vscode-open-in-marked2 || true
> @echo "$(GREEN)✓ Extension uninstalled$(RESET)"
