import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tagline from './Tagline'

test('loads and displays Tagline component', async () => {
    render(<Tagline text="This is a test" />)
    expect(screen.getByTestId('tagline')).toBeTruthy()
})
