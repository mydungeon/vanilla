import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Layout from './Layout'

test('loads and displays Layout component', async () => {
    render(<Layout hasLogo={true} isDarkTheme={true} />)
    expect(screen.getByTestId('layout')).toBeTruthy()
})
