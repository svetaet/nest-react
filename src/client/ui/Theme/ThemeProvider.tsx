import React, { FC, useState, useCallback, useMemo } from 'react'

import { ThemeContext, ThemeT } from './ThemeContext'

export const ThemeProvider: FC = ({ children }) => {
	const [theme, setTheme] = useState<ThemeT>('light')
	const switchTheme = useCallback(() => setTheme(theme === 'light' ? 'dark' : 'light'), [theme])
	const value = useMemo(() => ({ theme, switchTheme }), [theme, switchTheme])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
