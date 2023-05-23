import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Blog from './Blog'

test('loads and displays Blog component', async () => {
    render(<Blog />)
    expect(screen.getByTestId('blog')).toBeTruthy()
})
