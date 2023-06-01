import React from 'react'
import Routes from 'src/routes/Routes'
import useAuth from 'src/hooks/useAuth'

function App() {
    useAuth()
    return (
        <div className="App">
            <Routes />
        </div>
    )
}

export default App
