declare namespace SquareMScssNamespace {
	export interface ISquareMScss {
		Square: string
	}
}

declare const SquareMScssModule: SquareMScssNamespace.ISquareMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: SquareMScssNamespace.ISquareMScss
}

export = SquareMScssModule
