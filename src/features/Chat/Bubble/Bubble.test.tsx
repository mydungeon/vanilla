import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bubble from './Bubble'

test('loads and displays Bubble component', async () => {
    render(<Bubble date="test date" isMe={false} message="test" />)
    expect(screen.getByTestId('bubble')).toBeTruthy()
})
