import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Truncate from './Truncate'

test('loads and displays Truncate component', async () => {
    render(<Truncate text="test" />)
    expect(screen.getByTestId('truncate')).toBeTruthy()
})
