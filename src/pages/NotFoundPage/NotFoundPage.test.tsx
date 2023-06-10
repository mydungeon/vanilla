import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFoundPage from './NotFoundPage'

test('loads and displays NotFoundPage component', async () => {
    render(<NotFoundPage />)
    expect(screen.getByTestId('notFoundPage')).toBeTruthy()
})
