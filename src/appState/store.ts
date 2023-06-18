import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { rtkQueryErrorLogger } from 'src/appMiddleware/errors'
import alertsReducer from 'src/appState/alertsSlice'
import authReducer from 'src/appState/authSlice'
import { authApi } from 'src/appState/authApi'
import { fileApi } from 'src/appState/fileApi'
import { profileApi } from 'src/appState/profileApi'

export const store = configureStore({
    reducer: {
        alerts: alertsReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [fileApi.reducerPath]: fileApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            fileApi.middleware,
            profileApi.middleware,
            rtkQueryErrorLogger
        ),
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
