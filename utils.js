module.exports = {
  insert(vscode, provider) {
    if(!vscode.window.activeTextEditor) {
      vscode.window.showInformationMessage('没有可插入位置')
      return
    }
    vscode.window.activeTextEditor.edit(editBuilder => {
      var selections = vscode.window.activeTextEditor.selections
      selections.forEach(selection => {
        editBuilder.insert(new vscode.Position(selection.start.line, selection.start.character), provider());
      })
    })
  }
}