import { object, string } from 'yup'

export const validationSchema = object().shape({
    email: string().required(),
    password: string().required(),
})

export const initialValues = {
    email: '',
    password: '',
}
