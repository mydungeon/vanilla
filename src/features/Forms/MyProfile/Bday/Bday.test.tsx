import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bday from './Bday'

test('loads and displays Bday component', async () => {
    render(<Bday />)
    expect(screen.getByTestId('bday')).toBeTruthy()
})
