import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CheckboxInput from './CheckboxInput'

test('loads and displays CheckboxInput component', async () => {
    render(<CheckboxInput controlId="" label="" type="checkbox" />)
    expect(screen.getByTestId('checkboxinput')).toBeTruthy()
})
