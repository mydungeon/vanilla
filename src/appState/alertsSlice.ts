import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/appState/store'
import { Alert } from 'src/features/Alert/Alert.types'

const initialState: Array<Alert> = []

export const alertsSlice = createSlice({
    name: 'alerts',
    initialState,
    reducers: {
        addAlert: (state, action) => {
            console.log('addAlert', action.payload)
            state = [...state, ...action.payload]
            return state
        },
        deleteAlert: (state, action) => {
            delete state[action.payload]
            // OR state = []
        },
    },
})

export const { addAlert, deleteAlert } = alertsSlice.actions
export const selectCount = (state: RootState) => state.alerts
export default alertsSlice.reducer
