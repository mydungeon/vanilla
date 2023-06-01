import { array, object, string } from 'yup'

export const validationSchema = object().shape({
    'otp-0': string(),
    'otp-1': string(),
    'otp-2': string(),
    'otp-3': string(),
})

export const initialValues = {
    'otp-0': '',
    'otp-1': '',
    'otp-2': '',
    'otp-3': '',
}
