import * as vscode from 'vscode';

export type TagInfo = {
  decChar?: {
		chars: vscode.Range[],
		decorator: vscode.TextEditorDecorationType
	}
  tagName: string
  tagColor: string
};

export type Theme = "dark" | "light";

export const colorMap: Record<Theme, Record<string, string>> = {
	dark: {
		area: "#47ff6d",
		base: "#aeff00",
		blockquote: "#ffb7ad",
		q: "#ffb7ad",
		caption: "#6dd",
		sub: "#add",
		summary: "#fc0",
		sup: "#cdf",
		i: "#fffe80",
		ins: "#ffccf1",
		kbd: "#9fc",
		legend: "#afe",
		map: "#fff000",
		mark: "#fcff00",
		menu: "#3bf",
		noscript: "#ff7979",
		object: "#ff7e7e",
		rb: "#dac",
		rp: "#fdc",
		rt: "#afb",
		ruby: "#dea",
		s: "#bbb3d7",
		samp: "#fe3",
		small: "#aaf",
		source: "#48dfff",
		strong: "#fc9",
		wbr: "#fcdfb5",
		abbr: "#fff600",
		address: "#ee6",
		article: "#fc0",
		aside: "#ffca96",
		audio: "#a1ffd0",
		b: "#eaf",
		br: "#afa",
		button: "#fbb",
		canvas: "#6cf",
		cite: "#ff8888",
		code: "#adda04",
		col: "#a4d5ff",
		colgroup: "#acb5ff",
		dd: "#dd9",
		del: "#dcc",
		dfn: "#bfa",
		dl: "#e93",
		dt: "#9df",
		em: "#ef71ff",
		fieldset: "#fce",
		figcaption: "#aaf",
		figure: "#e6eecc",
		footer: "#ffe400",
		form: "#00ffc6",
		svg: "#6fd",
		hgroup: "#fac",
		hr: "#fc7",
		html: "#cac",
		iframe: "#ff80c2",
		image: "#48dfff",
		img: "#48dfff",
		input: "#dcc",
		label: "#ff7e00",
		li: "#fbb",
		link: "rgb(156, 255, 131)",
		main: "#42ff00",
		meta: "#aff",
		nav: "#00ffff",
		ol: "#9ac",
		option: "#edd",
		p: "#ffcc00",
		pre: "#ffb304",
		script: "rgb(66, 224, 255)",
		section: "#ffccdd",
		select: "#cff",
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
		span: "#aaeeff",
		div: "rgb(255, 255, 200)",
		style: "#ffa200",
		a: "rgb(90, 255, 123)",
		head: "#dda",
		header: "#faa",
		h1: "rgb(255, 130, 130)",
		h2: "rgb(255, 138, 216)",
		h3: "#e7e578",
		h4: "#a3ff99",
		h5: "rgb(94, 223, 255)",
		h6: "rgb(204, 160, 255)",
		body: "#a9ffb3",
	},
	light: {
		area: "#008b47",
		base: "#76a900",
		blockquote: "#ff5a50",
		q: "#ff5a50",
		caption: "#009999",
		sub: "#009999",
		summary: "#cc7a00",
		sup: "#0099cc",
		i: "#999900",
		ins: "#ff99cc",
		kbd: "#00cc99",
		legend: "#4db8e6",
		map: "#bfbf00",
		mark: "#bfbf00",
		menu: "#2673cb",
		noscript: "#ff3333",
		object: "#ff4d4d",
		rb: "#996699",
		rp: "#cc6699",
		rt: "#7a9966",
		ruby: "#99664d",
		s: "#7a7a99",
		samp: "#cc9e26",
		small: "#6699cb",
		source: "#0099cc",
		strong: "#cc8400",
		wbr: "#cc9966",
		abbr: "#cc9900",
		address: "#cc9933",
		article: "#cc7a00",
		aside: "#cc7a52",
		audio: "#4d9966",
		b: "#9966cc",
		br: "#4d7a4d",
		button: "#cc4d4d",
		canvas: "#4d99cc",
		cite: "#cc4d4d",
		code: "#7a9900",
		col: "#4d99cc",
		colgroup: "#4d4d99",
		dd: "#999933",
		del: "#996666",
		dfn: "#7acc33",
		dl: "#cc9933",
		dt: "#4d99cc",
		em: "#cc4dcc",
		fieldset: "#996699",
		figcaption: "#6699cc",
		figure: "#669966",
		footer: "#cc9900",
		form: "#00cc99",
		svg: "#4dcc99",
		hgroup: "#cc6699",
		hr: "#cc6633",
		html: "#996699",
		iframe: "#cc4d99",
		image: "#4d99cc",
		img: "#4d99cc",
		input: "#996666",
		label: "#cc6633",
		li: "#cc4d4d",
		link: "#4dcc66",
		main: "#4dcc33",
		meta: "#4dcccc",
		nav: "#00cccc",
		ol: "#6666cc",
		option: "#cc6699",
		p: "#cc9900",
		pre: "#cc6600",
		script: "#0099cc",
		section: "#cc6699",
		select: "#4dcccc",
		table: "#669966",
		tbody: "#cc66b2",
		td: "#cc9900",
		textarea: "#cc6633",
		tfoot: "#1a99cc",
		th: "#cc66b2",
		thead: "#cc6666",
		time: "#4dcc66",
		title: "#cc6699",
		tr: "#669999",
		ul: "#8c8c59",
		video: "#cc9966",
		span: "#66b2e6",
		div: "#999966",
		style: "#cc6633",
		a: "#4dcc99",
		head: "#cc9966",
		header: "#cc6666",
		h1: "#cc6666",
		h2: "#cc5a9e",
		h3: "#99994d",
		h4: "#59b259",
		h5: "#4d99cc",
		h6: "#9966cc",
		body: "#59cc59",
	},
};

export const colorEntries = (mode: "light" | "dark") => Object.entries(colorMap[mode]);
