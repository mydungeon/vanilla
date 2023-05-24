import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Signup from './Signup'

test('loads and displays Signup component', async () => {
    render(<Signup />)
    expect(screen.getByTestId('signup')).toBeTruthy()
})
