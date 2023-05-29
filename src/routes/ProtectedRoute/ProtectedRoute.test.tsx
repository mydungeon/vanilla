import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import ProtectedRoutes from './ProtectedRoutes'

test('loads and displays ProtectedRoute component', async () => {
    // render(<ProtectedRoutes />)
    expect(screen.getByTestId('protectedroute')).toBeTruthy()
})
