import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import List from './List'

test('loads and displays List component', async () => {
    render(<List />)
    expect(screen.getByTestId('list')).toBeTruthy()
})
