import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Single from './Single'

test('loads and displays Single component', async () => {
    render(<Single />)
    expect(screen.getByTestId('single')).toBeTruthy()
})
