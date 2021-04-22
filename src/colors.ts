import * as vscode from 'vscode';

export type TagInfo = {
  decChar?: {
		chars: vscode.Range[],
		decorator: vscode.TextEditorDecorationType
	}
  tagName: string
  tagColor: string
};

export const colorMap: Record<string, string> = {
	style: "#ffa200",
	a: "rgb(90, 255, 123)",
	abbr: "#fff600",
	address: "#ee6",
	area: "#47ff6d",
	article: "#fc0",
	aside: "#ffca96",
	audio: "#a1ffd0",
	b: "#eaf",
	base: "#aeff00",
	blockquote: "#ffb7ad",
	q: "#ffb7ad",
	body: "#a9ffb3",
	br: "#fcdfb5",
	button: "#fbb",
	canvas: "#6cf",
	caption: "#6dd",
	cite: "#ff8888",
	code: "#adda04",
	col: "#a4d5ff",
	colgroup: "#acb5ff",
	dd: "#dd9",
	del: "#a8a8a8",
	dfn: "#bfa",
	div: "rgb(206, 228, 231)",
	dl: "#e93",
	dt: "#9df",
	em: "#ef71ff",
	fieldset: "#fce",
	figcaption: "#aaf",
	figure: "#e6eecc",
	footer: "#ffe400",
	form: "#00ffc6",
	h1: "rgb(255, 130, 130)",
	h2: "rgb(255, 138, 216)",
	h3: "#e7e578",
	h4: "#a3ff99",
	h5: "rgb(94, 223, 255)",
	h6: "rgb(204, 160, 255)",
	head: "#dda",
	header: "#faa",
	hgroup: "#fac",
	hr: "#efc",
	html: "#cac",
	i: "#fffe80",
	iframe: "#ff80c2",
	image: "#48dfff",
	img: "#48dfff",
	input: "#dcc",
	ins: "#ffccf1",
	kbd: "#9fc",
	label: "#ff7e00",
	legend: "#afe",
	li: "#fbb",
	link: "rgb(156, 255, 131)",
	main: "#42ff00",
	map: "#fff000",
	mark: "#fcff00",
	menu: "#3bf",
	meta: "#aff",
	nav: "#00ffff",
	noscript: "#ff7979",
	object: "#ff7e7e",
	ol: "#9ac",
	optgroup: "#eeb",
	option: "#edd",
	p: "#ffcc00",
	pre: "#ffb304",
	rb: "#dac",
	rp: "#fdc",
	rt: "#afb",
	ruby: "#dea",
	s: "#bbb3d7",
	samp: "#fe3",
	script: "rgb(66, 224, 255)",
	section: "#ffccdd",
	select: "#cff",
	small: "#aaf",
	source: "#48dfff",
	span: "#bbf6ff",
	strong: "#fc9",
	sub: "#add",
	summary: "#fc0",
	sup: "#cdf",
	svg: "#6fd",
	table: "#ef9",
	tbody: "#fcb",
	td: "#ff8",
	textarea: "#ed9",
	tfoot: "rgb(35, 226, 255)",
	th: "#ff99f2",
	thead: "#f88",
	time: "#9eff6f",
	title: "#fcc",
	tr: "#aaeec4",
	ul: "#ffa",
	video: "#efc",
	wbr: "#fcdfb5",
};

export const colorEntries = Object.entries(colorMap);