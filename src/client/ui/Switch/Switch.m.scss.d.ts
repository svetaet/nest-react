declare namespace SwitchMScssNamespace {
	export interface ISwitchMScss {
		Switch: string
		SwitchBar: string
		SwitchPoint: string
		disabled: string
		toggled: string
	}
}

declare const SwitchMScssModule: SwitchMScssNamespace.ISwitchMScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: SwitchMScssNamespace.ISwitchMScss
}

export = SwitchMScssModule
