import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Tabs from './Tabs'

test('loads and displays Tabs component', async () => {
    render(<Tabs tabs={[]} />)
    expect(screen.getByTestId('tabs')).toBeTruthy()
})
