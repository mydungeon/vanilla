import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavLinks from './NavLinks'

test('loads and displays NavLinks component', async () => {
    render(<NavLinks />)
    expect(screen.getByTestId('navlinks')).toBeTruthy()
})
