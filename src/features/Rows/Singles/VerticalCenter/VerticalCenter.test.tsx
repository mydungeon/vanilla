import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import VerticalCenter from './VerticalCenter'

test('loads and displays VerticalCenter component', async () => {
    render(<VerticalCenter />)
    expect(screen.getByTestId('verticalcenter')).toBeTruthy()
})
