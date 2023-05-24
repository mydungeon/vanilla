import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavLogo from './NavLogo'

test('loads and displays NavLogo component', async () => {
    render(<NavLogo hasLogo={false} />)
    expect(screen.getByTestId('navlogo')).toBeTruthy()
})
