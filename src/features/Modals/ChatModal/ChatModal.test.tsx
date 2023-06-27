import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatModal from './ChatModal'

test('loads and displays ChatModal component', async () => {
    render(<ChatModal placement="end" show={true} onHide={() => {}} />)
    expect(screen.getByTestId('chatmodal')).toBeTruthy()
})
