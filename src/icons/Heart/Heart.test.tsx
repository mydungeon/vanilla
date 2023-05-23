import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Heart from './Heart'

test('loads and displays Heart component', async () => {
    render(<Heart />)
    expect(screen.getByTestId('heart')).toBeTruthy()
})
