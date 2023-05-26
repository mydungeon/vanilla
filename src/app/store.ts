import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
// import { usersApi } from 'src/appState/usersApi'
import { baseApi } from 'src/appState/baseApi'
import authReducer from 'src/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        // counter: counterReducer,
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
