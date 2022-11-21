import { Link } from 'react-router-dom'

// Components
import Searchbar from './Searchbar'

// Styles
import './Navbar.css'

export default function Navbar() {
	return (
		<div className='navbar'>
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
