import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pics from './Pics'

test('loads and displays MyPics component', async () => {
    render(<Pics />)
    expect(screen.getByTestId('pics')).toBeTruthy()
})
