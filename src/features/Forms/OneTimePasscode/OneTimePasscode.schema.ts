import { object, string } from 'yup'

export const validationSchema = object().shape({
    one: string(),
    two: string(),
    three: string(),
    four: string(),
})

export const initialValues = {
    one: '',
    two: '',
    three: '',
    four: '',
}
