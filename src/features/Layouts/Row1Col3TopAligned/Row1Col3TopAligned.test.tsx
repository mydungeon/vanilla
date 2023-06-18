import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Row1Col3TopAligned from './Row1Col3TopAligned'

test('loads and displays Row1Col3TopAligned component', async () => {
    render(<Row1Col3TopAligned />)
    expect(screen.getByTestId('row1Col3TopAligned')).toBeTruthy()
})
