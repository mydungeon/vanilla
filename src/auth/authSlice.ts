import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        },
    },
})

export const { setCredentials, logOut } = authSlice.actions
export const getCurrentUser = (state: any) => state.auth.user
export const getCurrentToken = (state: any) => state.auth.token
export default authSlice.reducer
