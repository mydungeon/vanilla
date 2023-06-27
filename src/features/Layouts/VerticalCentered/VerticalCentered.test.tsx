import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import VerticalCentered from './VerticalCentered'

test('loads and displays VerticalCentered component', async () => {
    render(<VerticalCentered />)
    expect(screen.getByTestId('verticalCentered')).toBeTruthy()
})
