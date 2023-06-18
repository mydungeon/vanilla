import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoadingPage from 'src/pages/LoadingPage'

test('loads and displays LoadingPage component', async () => {
    render(<LoadingPage />)
    expect(screen.getByTestId('loadingPage')).toBeTruthy()
})
