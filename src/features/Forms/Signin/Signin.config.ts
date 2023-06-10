import { object, string } from 'yup'

export const initialValues = {
    email: '',
    password: '',
}

export function validate(values: any) {
    const errors: any = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
}

export const validationSchema = object().shape({
    email: string().required(),
    password: string().required(),
})
