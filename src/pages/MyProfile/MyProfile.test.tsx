import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyProfile from './MyProfile'

test('loads and displays MyProfile component', async () => {
    render(<MyProfile />)
    expect(screen.getByTestId('myprofile')).toBeTruthy()
})
