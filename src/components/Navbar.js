import { Link } from 'react-router-dom'
import { useContext } from 'react'

// Context
import { ThemeContext } from '../context/ThemeContext'

// Components
import Searchbar from './Searchbar'

// Styles
import './Navbar.css'

export default function Navbar() {
	const { color } = useContext(ThemeContext)

	return (
		<div className='navbar' style={{ background: color }}>
			<nav>
				<Link to='/' className='brand'>
					<h1>Recipe Directory</h1>
				</Link>
				<Searchbar />
				<Link to='/create'>Add new recipe</Link>
			</nav>
		</div>
	)
}
