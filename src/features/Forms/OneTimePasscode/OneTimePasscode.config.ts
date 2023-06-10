import { array, object, string } from 'yup'

export const initialValues = {
    'otp-0': '',
    'otp-1': '',
    'otp-2': '',
    'otp-3': '',
}

export function validate(values: any) {
    const errors: any = {}

    if (!values['otp-0']) {
        errors['otp-0'] = 'Required'
    }
    if (!values['otp-1']) {
        errors['otp-1'] = 'Required'
    }
    if (!values['otp-2']) {
        errors['otp-2'] = 'Required'
    }
    if (!values['otp-3']) {
        errors['otp-3'] = 'Required'
    }

    return errors
}

export const validationSchema = object().shape({
    'otp-0': string(),
    'otp-1': string(),
    'otp-2': string(),
    'otp-3': string(),
})
