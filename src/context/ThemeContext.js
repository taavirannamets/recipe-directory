import { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	// Custom logic

	return (
		<ThemeContext.Provider value={{ color: 'blue' }}>
			{children}
		</ThemeContext.Provider>
	)
}
