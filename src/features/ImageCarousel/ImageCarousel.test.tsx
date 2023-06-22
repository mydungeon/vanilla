import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageCarousel from './ImageCarousel'

test('loads and displays ImageCarousel component', async () => {
    render(<ImageCarousel />)
    expect(screen.getByTestId('imageCarousel')).toBeTruthy()
})
