import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar'

test('loads and displays NavBar component', async () => {
    render(<NavBar hasLogo={true} isDarkTheme={false} />)
    expect(screen.getByTestId('navbar')).toBeTruthy()
})
