import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AuthLinks from './AuthLinks'

test('loads and displays AuthLinks component', async () => {
    render(<AuthLinks />)
    expect(screen.getByTestId('authlinks')).toBeTruthy()
})
