import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from './Logo'

test('loads and displays Logo component', async () => {
    render(<Logo />)
    expect(screen.getByTestId('logo')).toBeTruthy()
})
