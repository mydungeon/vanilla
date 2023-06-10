import { object, string } from 'yup'

export const initialValues = {
    password: '',
    passwordConfirm: '',
}

export function validate(values: any) {
    const { password, passwordConfirm } = values
    const errors: any = {}
    if (!password) {
        errors.password = 'Required'
    }
    if (password !== passwordConfirm) {
        errors.passwordConfirm = 'Confirmed password does not match'
    }
    return errors
}

export const validationSchema = object().shape({
    password: string().required(),
    passwordConfirm: string().required(),
})
