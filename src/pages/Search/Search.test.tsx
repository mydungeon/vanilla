import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'

test('loads and displays Search component', async () => {
    render(<Search />)
    expect(screen.getByTestId('search')).toBeTruthy()
})
