import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'src/appState/store'
import App from 'src/app'

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )

    expect(screen.getByText(/learn/i)).toBeInTheDocument()
})
