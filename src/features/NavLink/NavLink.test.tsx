import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavLink from './NavLink'

test('loads and displays NavLink component', async () => {
    render(<NavLink to="/" text="home" />)
    expect(screen.getByTestId('navlink')).toBeTruthy()
})
