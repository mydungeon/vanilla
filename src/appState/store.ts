import { configureStore } from '@reduxjs/toolkit'
import { rtkQueryErrorLogger } from 'src/appMiddleware/errors'
import authReducer from 'src/appState/authSlice'
import { authApi } from 'src/appState/authApi'
import alertsReducer from 'src/appState/alertsSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        alerts: alertsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, rtkQueryErrorLogger),
    devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
