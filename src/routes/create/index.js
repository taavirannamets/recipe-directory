import { useState } from 'react'

// Styles
import './Create.css'

export default function Create() {
	const [title, setTitle] = useState('')
	const [method, setMethod] = useState('')
	const [cookingTime, setCookingTime] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		console.log(title, method, cookingTime)
	}

	return (
		<div className='create'>
			<h1 className='page-title'>Add a new recipe</h1>

			<form onSubmit={handleSubmit}>
				<label>
					<span>Title</span>
					<input
						type='text'
						onChange={e => {
							setTitle(e.target.value)
						}}
						value={title}
						required
					/>
				</label>

				{/* Ingredients here later */}

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
