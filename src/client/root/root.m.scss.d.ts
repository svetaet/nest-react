declare namespace RootMScssNamespace {
	export interface IRootMScss {
		root: string
	}
}

declare const RootMScssModule: RootMScssNamespace.IRootMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: RootMScssNamespace.IRootMScss
}

export = RootMScssModule
