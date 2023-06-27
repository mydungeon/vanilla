import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Zipcode from './Zipcode'

test('loads and displays Zipcode component', async () => {
    render(<Zipcode />)
    expect(screen.getByTestId('zipCode')).toBeTruthy()
})
