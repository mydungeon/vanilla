import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import GenderPage from './GenderPage'

test('loads and displays GenderPage component', async () => {
    render(<GenderPage />)
    expect(screen.getByTestId('genderPage')).toBeTruthy()
})
