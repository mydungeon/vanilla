import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'

test('loads and displays Home component', async () => {
    render(<Home />)
    expect(screen.getByTestId('home')).toBeTruthy()
})
