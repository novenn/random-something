// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const getRandomName = require('./resources/name');
const getRandomContent = require('./resources/content');
const getRandomImage = require('./resources/image');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "random-something" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let name = vscode.commands.registerCommand('random-something.name', function () {
    vscode.window.activeTextEditor.edit(editBuilder => {
      var selections = vscode.window.activeTextEditor.selections
      selections.forEach(selection => {
        editBuilder.insert(new vscode.Position(selection.start.line, selection.start.character), getRandomName());
      })
    })
  });

  let content = vscode.commands.registerCommand('random-something.content', function () {
    vscode.window.activeTextEditor.edit(editBuilder => {
      var selections = vscode.window.activeTextEditor.selections
      selections.forEach(selection => {
        editBuilder.insert(new vscode.Position(selection.start.line, selection.start.character), getRandomContent());
      })
    })
  });

  let image = vscode.commands.registerCommand('random-something.image', function () {
    vscode.window.activeTextEditor.edit(editBuilder => {
      var selections = vscode.window.activeTextEditor.selections
      selections.forEach(selection => {
        editBuilder.insert(new vscode.Position(selection.start.line, selection.start.character), getRandomImage());
      })
    })
  });
  
	context.subscriptions.push(name);
	context.subscriptions.push(content);
	context.subscriptions.push(image);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
