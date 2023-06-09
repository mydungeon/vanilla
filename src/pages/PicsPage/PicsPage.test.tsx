import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MyPicsPage from './PicsPage'

test('loads and displays MyPicsPage component', async () => {
    render(<MyPicsPage />)
    expect(screen.getByTestId('myPicsPage')).toBeTruthy()
})
