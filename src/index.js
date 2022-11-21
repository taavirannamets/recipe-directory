import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Context
import { ThemeProvider } from './context/ThemeContext'

// Styles
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
