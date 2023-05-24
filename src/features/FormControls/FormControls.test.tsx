import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormControls from './FormControls'

test('loads and displays FormControls component', async () => {
    render(<FormControls />)
    expect(screen.getByTestId('formcontrols')).toBeTruthy()
})
