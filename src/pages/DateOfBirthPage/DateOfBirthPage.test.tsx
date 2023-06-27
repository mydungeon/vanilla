import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateOfBirthPage from './DateOfBirthPage'

test('loads and displays DateOfBirthPage component', async () => {
    render(<DateOfBirthPage />)
    expect(screen.getByTestId('dateOfBirthPage')).toBeTruthy()
})
