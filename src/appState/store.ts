import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { authApi } from 'src/apis/authApi'
import alertsReducer from 'src/appState/alertsSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        alerts: alertsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
