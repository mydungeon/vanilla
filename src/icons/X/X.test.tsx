import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import X from './X'

test('loads and displays X component', async () => {
    render(<X />)
    expect(screen.getByTestId('x')).toBeTruthy()
})
