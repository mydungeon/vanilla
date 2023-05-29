import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppLinks from './AppLinks'

test('loads and displays AppLinks component', async () => {
    render(<AppLinks />)
    expect(screen.getByTestId('applinks')).toBeTruthy()
})
