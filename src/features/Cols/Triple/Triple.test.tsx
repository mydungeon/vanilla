import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Triple from './Triple'

test('loads and displays Triple component', async () => {
    render(<Triple />)
    expect(screen.getByTestId('triple')).toBeTruthy()
})
