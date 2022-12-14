import { useEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

// Styles
import './Create.css'

export default function Create() {
	const [title, setTitle] = useState('')
	const [method, setMethod] = useState('')
	const [cookingTime, setCookingTime] = useState('')
	const [newIngredient, setNewIngredient] = useState('')
	const [ingredients, setIngredients] = useState([])
	const ingredientInput = useRef(null)

	const url = 'http://localhost:3000/recipes'
	const { postData, data, error } = useFetch(url, 'POST')
	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		postData({
			title,
			ingredients,
			method,
			cookingTime: cookingTime + ' minutes',
		})
	}

	const handleAdd = e => {
		e.preventDefault()
		const ing = newIngredient.trim()

		if (ing && !ingredients.includes(ing)) {
			setIngredients(prevIngredients => [...prevIngredients, ing])
		}
		setNewIngredient('')
		ingredientInput.current.focus()
	}

	// Redirect the user when there's a data response
	useEffect(() => {
		if (data) {
			navigate('/')
		}
	}, [data, navigate])

	return (
		<div className='create'>
			<h1 className='page-title'>Add a new recipe</h1>

			<form onSubmit={handleSubmit}>
				<label>
					<span>Title</span>
					<input
						type='text'
						onChange={e => setTitle(e.target.value)}
						value={title}
						required
					/>
				</label>

				<label>
					<span>Ingredients</span>
					<div className='ingredients'>
						<input
							type='text'
							onChange={e => setNewIngredient(e.target.value)}
							value={newIngredient}
							ref={ingredientInput}
						/>
						<button className='btn' onClick={handleAdd}>
							Add
						</button>
					</div>
				</label>
				<p>
					Ingredients added:{' '}
					{ingredients.map(i => (
						<em key={i} className='ingredients-added'>
							{i}
						</em>
					))}
				</p>

				<label>
					<span>Method</span>
					<textarea
						onChange={e => setMethod(e.target.value)}
						value={method}
						required
					/>
				</label>
				<label>
					<span>Cooking time</span>
					<div className='cooking-time'>
						<input
							type='number'
							onChange={e => setCookingTime(e.target.value)}
							value={cookingTime}
							required
						/>{' '}
						<span className='input-add'>minutes</span>
					</div>
				</label>
				<button className='btn'>Save recipe</button>
			</form>
		</div>
	)
}
