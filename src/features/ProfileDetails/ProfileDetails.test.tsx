import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileDetails from './ProfileDetails'

test('loads and displays ProfileDetails component', async () => {
    render(<ProfileDetails />)
    expect(screen.getByTestId('profiledetails')).toBeTruthy()
})
