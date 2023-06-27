import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CarouselModal from './CarouselModal'

test('loads and displays CarouselModal component', async () => {
    render(<CarouselModal show={true} onHide={() => {}} />)
    expect(screen.getByTestId('carouselModal')).toBeTruthy()
})
