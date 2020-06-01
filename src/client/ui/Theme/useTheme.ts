import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
	const themeContext = useContext(ThemeContext)

	if (process.env.NODE_ENV === 'development' && themeContext === undefined)
		console.error('useTheme was invoked out of ThemContext scope')

	return themeContext
}
