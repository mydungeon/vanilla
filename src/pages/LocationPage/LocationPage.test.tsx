import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LocationPage from './LocationPage'

test('loads and displays LocationPage component', async () => {
    render(<LocationPage />)
    expect(screen.getByTestId('locationPage')).toBeTruthy()
})
