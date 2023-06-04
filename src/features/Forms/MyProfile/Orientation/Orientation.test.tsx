import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Orientation from './Orientation'

test('loads and displays Orientation component', async () => {
    render(<Orientation />)
    expect(screen.getByTestId('orientation')).toBeTruthy()
})
