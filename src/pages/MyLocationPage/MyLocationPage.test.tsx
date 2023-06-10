import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyLocationPage from './MyLocationPage'

test('loads and displays MyLocationPage component', async () => {
    render(<MyLocationPage />)
    expect(screen.getByTestId('myLocationPage')).toBeTruthy()
})
