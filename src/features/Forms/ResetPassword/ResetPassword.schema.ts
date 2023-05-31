import { object, string } from 'yup'

export const validationSchema = object().shape({
    password: string().required(),
    passwordConfirm: string().required(),
})

export const initialValues = {
    password: '',
    passwordConfirm: '',
}
