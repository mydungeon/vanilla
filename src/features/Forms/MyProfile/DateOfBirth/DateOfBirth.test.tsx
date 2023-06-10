import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DateOfBirth from './DateOfBirth'

test('loads and displays DateOfBirth component', async () => {
    render(<DateOfBirth />)
    expect(screen.getByTestId('dateOfBirth')).toBeTruthy()
})
