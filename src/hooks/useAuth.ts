import { useState, useEffect } from 'react'
import { useAppDispatch } from 'src/hooks'
import { getUserFromLocalStorage } from 'src/app/App.utils'
import { setUserAndToken } from 'src/appState/authSlice'
import { Profile } from 'src/features/Profile/Profile.types'

const useAuth = () => {
    const [user, setUser] = useState<Profile>()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useAppDispatch()
    useEffect(() => {
        const user = getUserFromLocalStorage()
        if (user) {
            setIsLoggedIn(true)
            setUser(user)
            dispatch(setUserAndToken(user))
        }
    }, [dispatch])

    return [isLoggedIn, user]
}

export default useAuth
