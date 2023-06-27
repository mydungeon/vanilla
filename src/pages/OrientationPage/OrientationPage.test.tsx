import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import OrientationPage from './OrientationPage'

test('loads and displays OrientationPage component', async () => {
    render(<OrientationPage />)
    expect(screen.getByTestId('orientationPage')).toBeTruthy()
})
