import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EasterEgg from './EasterEgg'

test('loads and displays EasterEgg component', async () => {
    render(<EasterEgg />)
    expect(screen.getByTestId('easteregg')).toBeTruthy()
})
