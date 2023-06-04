import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Gender from './Gender'

test('loads and displays Gender component', async () => {
    render(<Gender />)
    expect(screen.getByTestId('gender')).toBeTruthy()
})
