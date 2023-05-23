import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Menu from './Menu'

test('loads and displays Menu component', async () => {
    render(<Menu />)
    expect(screen.getByTestId('menu')).toBeTruthy()
})
