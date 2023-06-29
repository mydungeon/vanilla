import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfilePreferencesPage from './ProfilePreferencesPage'

test('loads and displays ProfilePreferencesPage component', async () => {
    render(<ProfilePreferencesPage />)
    expect(screen.getByTestId('profilePreferencesPage')).toBeTruthy()
})
