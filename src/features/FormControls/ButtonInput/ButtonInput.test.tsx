import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonInput from './ButtonInput'

test('loads and displays ButtonInput component', async () => {
    render(<ButtonInput text="submit" />)
    expect(screen.getByTestId('buttoninput')).toBeTruthy()
})
