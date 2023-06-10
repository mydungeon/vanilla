import { object, string } from 'yup'

export const initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
}

export function validate(values: any) {
    const { email, firstName, password, passwordConfirm } = values
    const errors: any = {}
    if (!email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!firstName) {
        errors.firstName = 'Required'
    }
    if (!password) {
        errors.password = 'Required'
    }
    if (password !== passwordConfirm) {
        errors.passwordConfirm = 'Confirmed password does not match'
    }
    return errors
}

export const validationSchema = object().shape({
    firstName: string().required(),
    email: string().required(),
    password: string().required(),
    passwordConfirm: string().required(),
})
