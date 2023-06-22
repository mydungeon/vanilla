import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavMenu from './NavMenu'

test('loads and displays NavMenu component', async () => {
    render(<NavMenu />)
    expect(screen.getByTestId('navmenu')).toBeTruthy()
})
