import React, { useEffect } from 'react'
import Routes from 'src/routes/Routes'
import { BrowserRouter } from 'react-router-dom'
import { useAppDispatch } from 'src/appState/hooks'
import { getUserFromLocalStorage } from './App.utils'
import { setAuth } from 'src/appState/authSlice'

function App() {
    const dispatch = useAppDispatch()
    const user = getUserFromLocalStorage()
    useEffect(() => {
        if (user) {
            dispatch(setAuth(JSON.parse(user)))
        }
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
