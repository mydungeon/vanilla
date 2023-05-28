import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import H1 from './H1'

test('loads and displays H1 component', async () => {
    render(<H1 text="test" />)
    expect(screen.getByTestId('h1')).toBeTruthy()
})
