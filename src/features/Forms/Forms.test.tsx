import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Forms from './Forms'

test('loads and displays Forms component', async () => {
    render(<Forms />)
    expect(screen.getByTestId('forms')).toBeTruthy()
})
