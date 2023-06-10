import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyGenderPage from './MyGenderPage'

test('loads and displays MyGenderPage component', async () => {
    render(<MyGenderPage />)
    expect(screen.getByTestId('myGenderPage')).toBeTruthy()
})
