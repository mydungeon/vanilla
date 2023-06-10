import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyDateOfBirthPage from './MyDateOfBirthPage'

test('loads and displays MyDateOfBirthPage component', async () => {
    render(<MyDateOfBirthPage />)
    expect(screen.getByTestId('mydateofbirthpage')).toBeTruthy()
})
