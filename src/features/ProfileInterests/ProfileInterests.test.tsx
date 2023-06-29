import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileInterests from './ProfileInterests'

test('loads and displays ProfileInterests component', async () => {
    render(<ProfileInterests />)
    expect(screen.getByTestId('profileInterests')).toBeTruthy()
})
