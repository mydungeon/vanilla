import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { clearLocalStorage } from 'src/app/App.utils'
import { TOAST_ERROR } from 'src/appMiddleware/errors.constants'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            if (action.payload.status === 403) {
                clearLocalStorage()
            }
            toast.error(action.payload.data.message, TOAST_ERROR)
        }
        return next(action)
    }
