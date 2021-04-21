
export type CommentSetting = {
	start: string
	end: string
	startRegExp?: string
	endRegExp?: string
};

export const commentSettingMap: Record<string, CommentSetting> = {
	javascriptreact: {
		start: '/*',
		end: '*/',
		startRegExp: '/\\*',
		endRegExp: '\\*/',
	},
	typescriptreact: {
		start: '/*',
		end: '*/',
		startRegExp: '/\\*',
		endRegExp: '\\*/',
	},
	default: {
		start: '<!--',
		end: '-->',
	}
};
