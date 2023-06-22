import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserActionsModal from './UserActionsModal'

test('loads and displays UserActionsModal component', async () => {
    render(<UserActionsModal show={true} onHide={() => {}} />)
    expect(screen.getByTestId('userActionsModal')).toBeTruthy()
})
