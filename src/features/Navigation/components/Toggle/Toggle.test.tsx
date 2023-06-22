import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Toggle from './Toggle'

test('loads and displays Toggle component', async () => {
    render(<Toggle isToggled={false} />)
    expect(screen.getByTestId('toggle')).toBeTruthy()
})
