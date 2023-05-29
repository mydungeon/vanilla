import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface AuthState {
    name: string | null
    token: string | null
}

const initialState: AuthState = {
    name: null,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserAndToken: (
            state,
            action: PayloadAction<{ name: string; token: string }>
        ) => {
            state.name = action.payload.name
            state.token = action.payload.token
        },
        clearUserAndToken: (state) => {
            state.name = null
            state.token = null
        },
    },
})

export const selectAuth = (state: RootState) => state.auth

export const { setUserAndToken, clearUserAndToken } = authSlice.actions

export default authSlice.reducer
