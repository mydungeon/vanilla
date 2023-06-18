import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from './Main'

test('loads and displays Main component', async () => {
    render(<Main />)
    expect(screen.getByTestId('main')).toBeTruthy()
})
