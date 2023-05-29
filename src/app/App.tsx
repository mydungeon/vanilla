import React, { useEffect } from 'react'
import Routes from 'src/routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import { useAppDispatch } from 'src/appState/hooks'
import { setAuth } from 'src/appState/authSlice'

function App() {
    const dispatch = useAppDispatch()
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    useEffect(() => {
        dispatch(setAuth(user))
    }, [])
    return (
        <div className="App">
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    )
}

export default App
