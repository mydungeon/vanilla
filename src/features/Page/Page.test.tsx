import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from './Page'

test('loads and displays Page component', async () => {
    render(<Page h1Text="test" />)
    expect(screen.getByTestId('page')).toBeTruthy()
})
