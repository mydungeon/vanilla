import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Alert from './Alert'

test('loads and displays Alert component', async () => {
    render(<Alert />)
    expect(screen.getByTestId('alert')).toBeTruthy()
})
