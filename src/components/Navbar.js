import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// Components
import Searchbar from './Searchbar'

// Styles
import './Navbar.css'

export default function Navbar() {
	const { color } = useTheme()

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
