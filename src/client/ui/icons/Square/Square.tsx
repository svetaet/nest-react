import React, { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'

import s from './Square.m.scss'

export type SquareP = HTMLAttributes<SVGAElement>

export const Square: FC<SquareP> = ({ className }) => (
	<svg className={clsx(s.Square, className)} viewBox="0 0 1 1">
		<rect width="100%" height="100%" fill="currentColor" />
	</svg>
)
