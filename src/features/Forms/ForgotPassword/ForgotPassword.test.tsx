import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ForgotPassword from './ForgotPassword'

test('loads and displays ForgotPassword component', async () => {
    render(<ForgotPassword />)
    expect(screen.getByTestId('forgotpassword')).toBeTruthy()
})
