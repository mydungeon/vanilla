import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Signin from './Signin'

test('loads and displays Signin component', async () => {
    render(<Signin />)
    expect(screen.getByTestId('signin')).toBeTruthy()
})
