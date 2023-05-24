import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Splash from './Splash'

test('loads and displays Splash component', async () => {
    render(<Splash />)
    expect(screen.getByTestId('splash')).toBeTruthy()
})
