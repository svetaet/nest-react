import { createContext } from 'react'

export const themes = ['light', 'dark'] as const
export type ThemeT = typeof themes[number]

export const ThemeContext = createContext({ theme: 'light', switchTheme: () => {} })
