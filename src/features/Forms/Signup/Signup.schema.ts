import { object, string } from 'yup'

export const validationSchema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    email: string().required(),
    password: string().required(),
    passwordConfirm: string().required(),
})

export const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
}
