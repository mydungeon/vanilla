import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileEditPage from './ProfileEditPage'

test('loads and displays ProfileEditPage component', async () => {
    render(<ProfileEditPage />)
    expect(screen.getByTestId('profileEditPage')).toBeTruthy()
})
