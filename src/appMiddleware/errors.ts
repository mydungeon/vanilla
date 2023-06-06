import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { TOAST_ERROR } from 'src/appMiddleware/errors.constants'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            toast.error(action.payload.data.message, TOAST_ERROR)
        }
        return next(action)
    }
