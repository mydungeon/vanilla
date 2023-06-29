import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileTabs from './ProfileTabs'

test('loads and displays ProfileTabs component', async () => {
    render(<ProfileTabs />)
    expect(screen.getByTestId('profiletabs')).toBeTruthy()
})
