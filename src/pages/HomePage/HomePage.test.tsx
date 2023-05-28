import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from './HomePage'

test('loads and displays HomePage component', async () => {
    render(<HomePage />)
    expect(screen.getByTestId('homePage')).toBeTruthy()
})
