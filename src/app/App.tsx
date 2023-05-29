import React, { useEffect } from 'react'
import Routes from 'src/routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import useAuth from 'src/hooks/useAuth'

function App() {
    useAuth()
    return (
        <div className="App">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    )
}

export default App
