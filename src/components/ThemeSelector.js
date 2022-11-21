import { useTheme } from '../hooks/useTheme'

// Styles
import './ThemeSelector.css'

const themeColors = ['var(--main)', 'var(--secondary)', 'var(--tertiary)']

export default function ThemeSelector() {
	const { changeColor } = useTheme()

	return (
		<div className='theme-selector'>
			<div className='theme-buttons'>
				{themeColors.map(color => (
					<div
						key={color}
						onClick={() => changeColor(color)}
						style={{ background: color }}
					/>
				))}
			</div>
		</div>
	)
}
