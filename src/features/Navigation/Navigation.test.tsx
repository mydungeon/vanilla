import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation from './Navigation'

test('loads and displays Navigation component', async () => {
    render(<Navigation showLogo={true} theme="light" />)
    expect(screen.getByTestId('navbar')).toBeTruthy()
})
