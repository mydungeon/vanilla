import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ForgotPasswordPage from './ForgotPasswordPage'

test('loads and displays ForgotPasswordPage component', async () => {
    render(<ForgotPasswordPage />)
    expect(screen.getByTestId('forgotPasswordPage')).toBeTruthy()
})
