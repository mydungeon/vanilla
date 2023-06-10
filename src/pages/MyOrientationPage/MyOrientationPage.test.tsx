import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyOrientationPage from './MyOrientationPage'

test('loads and displays MyGenderPage component', async () => {
    render(<MyOrientationPage />)
    expect(screen.getByTestId('myOrientationPage')).toBeTruthy()
})
