declare namespace ButtonMScssNamespace {
	export interface IButtonMScss {
		Button: string
		ButtonBorder: string
		ButtonBorderBottom: string
		ButtonBorderTop: string
		ButtonContent: string
		ButtonFill: string
		ButtonIcon: string
		disabled: string
	}
}

declare const ButtonMScssModule: ButtonMScssNamespace.IButtonMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: ButtonMScssNamespace.IButtonMScss
}

export = ButtonMScssModule
