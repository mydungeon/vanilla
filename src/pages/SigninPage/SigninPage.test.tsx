import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SigninPage from './SigninPage'

test('loads and displays SigninPage component', async () => {
    render(<SigninPage />)
    expect(screen.getByTestId('signinPage')).toBeTruthy()
})
