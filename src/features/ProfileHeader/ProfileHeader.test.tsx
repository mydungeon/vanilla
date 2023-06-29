import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileHeader from './ProfileHeader'

test('loads and displays ProfileHeader component', async () => {
    render(
        <ProfileHeader
            showChat={() => true}
            showPictures={() => true}
            showUserActions={() => true}
        />
    )
    expect(screen.getByTestId('profileheader')).toBeTruthy()
})
