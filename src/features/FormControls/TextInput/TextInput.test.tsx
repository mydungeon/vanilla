import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TextInput from './TextInput'

test('loads and displays TextInput component', async () => {
    render(
        <TextInput
            controlId=""
            isInvalid={true}
            isValid={false}
            name="firstName"
            onChange={() => {}}
            placeholder=""
            type=""
        />
    )
    expect(screen.getByTestId('textinput')).toBeTruthy()
})
