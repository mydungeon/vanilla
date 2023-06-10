import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NextButton from './NextButton'

test('loads and displays NextButton component', async () => {
    render(<NextButton handleNext={() => {}} text="test" />)
    expect(screen.getByTestId('nextButton')).toBeTruthy()
})
