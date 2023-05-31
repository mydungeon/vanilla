import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OneTimePasscode from './OneTimePasscode'

test('loads and displays OneTimePasscode component', async () => {
    render(<OneTimePasscode />)
    expect(screen.getByTestId('onetimepasscode')).toBeTruthy()
})
