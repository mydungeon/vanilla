import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ResetPasswordPage from './ResetPasswordPage'

test('loads and displays ResetPasswordPage component', async () => {
    render(<ResetPasswordPage />)
    expect(screen.getByTestId('resetPasswordPage')).toBeTruthy()
})
