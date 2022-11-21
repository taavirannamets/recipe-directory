import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Routes
import Home from './routes/home'
import Create from './routes/create'
import Search from './routes/search'
import Recipe from './routes/recipe'

// Components
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'

// Styles
import './App.css'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<ThemeSelector />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create' element={<Create />} />
					<Route path='/search' element={<Search />} />
					<Route path='/recipe/:id' element={<Recipe />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
