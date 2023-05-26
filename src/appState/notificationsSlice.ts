import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/app/store'

export interface Nofication {
    value: string
    status: 'idle' | 'loading' | 'failed'
}

const initialState: Nofication = {
    value: '',
    status: 'idle',
}

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        addNotification: (state, actions) => {
            state.value = actions.payload
        },
        removeNotification: (state) => {
            state.value = ''
        },
    },
})

export const { addNotification, removeNotification } =
    notificationsSlice.actions
export const selectCount = (state: RootState) => state.notifications.value
export default notificationsSlice.reducer
