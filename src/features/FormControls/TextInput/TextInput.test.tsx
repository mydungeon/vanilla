import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TextInput from './TextInput'

test('loads and displays TextInput component', async () => {
    render(<TextInput controlId="" placeholder="" type="" />)
    expect(screen.getByTestId('textinput')).toBeTruthy()
})
