import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OneTimePasscodePage from './OneTimePasscodePage'

test('loads and displays OneTimePasscodePage component', async () => {
    render(<OneTimePasscodePage />)
    expect(screen.getByTestId('oneTimePasscodePage')).toBeTruthy()
})
