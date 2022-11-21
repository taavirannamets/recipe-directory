import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/icons/mode-icon.svg'

// Styles
import './ThemeSelector.css'

const themeColors = ['var(--main)', 'var(--secondary)', 'var(--tertiary)']

export default function ThemeSelector() {
	const { changeColor, changeMode, mode } = useTheme()

	const toggleMode = () => {
		changeMode(mode === 'dark' ? 'light' : 'dark')
	}
	console.log(mode)

	return (
		<div className='theme-selector'>
			<div className='mode-toggle'>
				<img
					onClick={toggleMode}
					src={modeIcon}
					alt='Dark/light toggle icon'
					style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
				/>
			</div>
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
