import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileSettingsPage from './ProfileSettingsPage'

test('loads and displays ProfileSettingsPage component', async () => {
    render(<ProfileSettingsPage />)
    expect(screen.getByTestId('profileSettingsPage')).toBeTruthy()
})
