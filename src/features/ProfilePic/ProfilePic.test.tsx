import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfilePic from './ProfilePic'

test('loads and displays ProfilePic component', async () => {
    render(<ProfilePic fileName="test" />)
    expect(screen.getByTestId('profilepic')).toBeTruthy()
})
