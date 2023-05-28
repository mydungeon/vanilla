import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignupPage from './SignupPage'

test('loads and displays SignupPage component', async () => {
    render(<SignupPage />)
    expect(screen.getByTestId('signupPage')).toBeTruthy()
})
