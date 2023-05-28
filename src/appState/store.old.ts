import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import { usersApi } from 'src/appState/usersApi'
import { baseApi } from 'src/auth.old/baseAuth'
import authReducer from 'src/auth.old/authSlice'
import alertsReducer from 'src/appState/alertsSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        alerts: alertsReducer,
        // [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
