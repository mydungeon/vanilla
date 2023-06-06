import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PagePreloader from './PagePreloader'

test('loads and displays PagePreloader component', async () => {
    render(<PagePreloader />)
    expect(screen.getByTestId('pagepreloader')).toBeTruthy()
})
