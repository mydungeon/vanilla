import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchPage from './SearchPage'

test('loads and displays SearchPage component', async () => {
    render(<SearchPage />)
    expect(screen.getByTestId('searchPage')).toBeTruthy()
})
