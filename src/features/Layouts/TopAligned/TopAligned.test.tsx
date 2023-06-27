import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TopAligned from './TopAligned'

test('loads and displays TopAligned component', async () => {
    render(<TopAligned />)
    expect(screen.getByTestId('topAligned')).toBeTruthy()
})
