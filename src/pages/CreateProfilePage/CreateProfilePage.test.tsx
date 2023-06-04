import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CreateProfilePage from './CreateProfilePage'

test('loads and displays CreateProfilePage component', async () => {
    render(<CreateProfilePage />)
    expect(screen.getByTestId('createMyProfilePage')).toBeTruthy()
})
