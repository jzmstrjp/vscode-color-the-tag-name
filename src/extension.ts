import * as vscode from 'vscode';
import { TagInfo, colorMap, colorEntries } from './colors';
import { CommentSetting, commentSettingMap } from './commentSetting';

let tagInfos: TagInfo[] = [];

const decorateInner = (tagInfo: TagInfo, editor: vscode.TextEditor, src: string) => {
	const commentSetting: CommentSetting = commentSettingMap[editor.document.languageId] || commentSettingMap.default;

	if (tagInfo.decChar !== undefined) {
		tagInfo.decChar.decorator.dispose();
	}
	const regex = new RegExp(`${commentSetting.startRegExp || commentSetting.start}|${commentSetting.endRegExp || commentSetting.end}|<(?:/|)${tagInfo.tagName}(?:$|(?:| (?:.*?)[^-?%$])(?<!=)>)`, 'gm');
	let match: RegExpExecArray | null;
	let inComment = false;
	tagInfo.decChar = {
		chars: [],
		decorator: vscode.window.createTextEditorDecorationType({
			color: tagInfo.tagColor,
		})
	};
	while (match = regex.exec(src)) {
		const splited = match[0].split(/[{}"]/);
		//コメントだったら飛ばす
		if (match[0] === commentSetting.start) {
			// コメント開始
			inComment = true;
			continue;
		}
		if (match[0] === commentSetting.end) {
			// コメント終了
			inComment = false;
			continue;
		}
		if (inComment === true) {
			continue;
		}
		let singleLengths = 0;
		if (splited.length > 2) {
			splited.forEach(function (single, i) {
				//偶数だったら
				if (i % 2 === 0 && match !== null && tagInfo.decChar !== undefined) {
					const startPos = editor.document.positionAt(match.index + singleLengths);
					const endPos = editor.document.positionAt(match.index + singleLengths + single.length);
					const range = new vscode.Range(startPos, endPos);
					tagInfo.decChar.chars.push(range);
				}
				singleLengths += single.length + 1;
			});
		} else {
			const startPos = editor.document.positionAt(match.index);
			const endPos = editor.document.positionAt(match.index + match[0].length);
			const range = new vscode.Range(startPos, endPos);
			tagInfo.decChar.chars.push(range);
		}
	}
	editor.setDecorations(tagInfo.decChar.decorator, tagInfo.decChar.chars);
};

const decorate = () => {
	const editor = vscode.window.activeTextEditor;
	if (editor === undefined) {
		return;
	}
	const src = editor.document.getText();
	const matches = src.match(/<(?:\/|)([a-zA-Z][a-zA-Z0-9.-]*)(?:$|(?:| (?:.*?)[^-?%$])(?<!=)>)/gm) || [];
	const tagNameLikeWords = matches.map((word) => word.replace(/[</>]|(?: .*$)/g, ''));
	const uniqueTagNames = [...new Set(tagNameLikeWords)];
	uniqueTagNames.forEach((tagName) => {
		// まだないタグ名の分だけ追加。
		if (tagInfos.map(({ tagName }) => tagName).includes(tagName)) {
			return;
		}
		const tagColor = colorMap[tagName] || colorEntries[tagName.length + (tagName.match(/[aiueo]/g)?.length || 0)][1];
		tagInfos.push({
			decChar: undefined,
			tagName,
			tagColor,
		});
	});
	tagInfos.forEach(function (tagInfo) {
		decorateInner(tagInfo, editor, src);
	});
};

export function activate(context: vscode.ExtensionContext) {
	// Also trigger an update on changing the editor
	vscode.window.onDidChangeActiveTextEditor(editor => {
		decorate();
	}, null, context.subscriptions);
	// And when modifying the document
	vscode.workspace.onDidChangeTextDocument(event => {
		decorate();
	}, null, context.subscriptions);
	decorate();
}
// this method is called when your extension is deactivated
export function deactivate() { }
