import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import H2 from './H2'

test('loads and displays H2 component', async () => {
    render(<H2 text="test" />)
    expect(screen.getByTestId('h2')).toBeTruthy()
})
