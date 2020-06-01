import React, { FC } from 'react'
import clsx from 'clsx'

import s from './Switch.m.scss'

export type SwitchP = React.HTMLAttributes<HTMLButtonElement> & {
	value: boolean
	onToggle: (value: boolean) => void
	disabled?: boolean
}

export const Switch: FC<SwitchP> = ({ value, onToggle, disabled, className, ...rest }) => {
	return (
		<button
			className={clsx(s.Switch, className, { [s.toggled]: value, [s.disabled]: disabled })}
			onClick={disabled ? undefined : () => onToggle(!value)}
			tabIndex={disabled ? -1 : undefined}
			{...rest}
		>
			<div className={s.SwitchBar}>
				<div className={s.SwitchPoint} />
			</div>
		</button>
	)
}
