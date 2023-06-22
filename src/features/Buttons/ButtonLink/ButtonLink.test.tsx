import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonLink from 'src/features/Buttons/ButtonLink'

test('loads and displays ButtonLink component', async () => {
    render(<ButtonLink to="/" text="home" />)
    expect(screen.getByTestId('navlink')).toBeTruthy()
})
