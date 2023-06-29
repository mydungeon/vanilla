import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProfileDescription from './ProfileDescription'

test('loads and displays ProfileDescription component', async () => {
    render(<ProfileDescription />)
    expect(screen.getByTestId('profiledescription')).toBeTruthy()
})
