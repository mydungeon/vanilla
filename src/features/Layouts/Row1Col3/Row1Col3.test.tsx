import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Row1Col3 from './Row1Col3'

test('loads and displays Row1Col3 component', async () => {
    render(<Row1Col3 />)
    expect(screen.getByTestId('row1col3')).toBeTruthy()
})
