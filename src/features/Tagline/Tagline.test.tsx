import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tagline from './Tagline'

test('loads and displays Tagline component', async () => {
    render(<Tagline taglines={['test1', 'test2']} />)
    expect(screen.getByTestId('tagline')).toBeTruthy()
})
