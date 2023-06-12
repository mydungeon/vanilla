import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProgressBar from './ProgressBar'

test('loads and displays ProgressBar component', async () => {
    render(<ProgressBar progress={25} />)
    expect(screen.getByTestId('progressbar')).toBeTruthy()
})
