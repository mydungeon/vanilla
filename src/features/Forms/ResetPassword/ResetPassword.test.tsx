import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ResetPassword from './ResetPassword'

test('loads and displays ResetPassword component', async () => {
    render(<ResetPassword />)
    expect(screen.getByTestId('resetpassword')).toBeTruthy()
})
