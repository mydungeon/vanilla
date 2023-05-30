import { object, string } from 'yup'

export const validationSchema = object().shape({
    email: string().required(),
})

export const initialValues = {
    email: '',
}
