import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header'

test('loads and displays Header component', async () => {
    render(<Header showLogo={true} isDarkTheme={true} />)
    expect(screen.getByTestId('header')).toBeTruthy()
})
