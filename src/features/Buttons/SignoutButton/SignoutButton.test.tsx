import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignoutButton from './SignoutButton'

test('loads and displays SignoutButton component', async () => {
    render(<SignoutButton />)
    expect(screen.getByTestId('signoutbutton')).toBeTruthy()
})
