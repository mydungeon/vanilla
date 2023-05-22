import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Routes from './Routes'

test('loads and displays Routes component', async () => {
    render(<Routes />)
    expect(screen.getByTestId('routes')).toBeTruthy()
})
