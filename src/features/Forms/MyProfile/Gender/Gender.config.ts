import { object, string } from 'yup'

export function validate(values: any) {
    const errors: any = {}

    if (!values.gender) {
        errors.gender = 'Required'
    }
    return errors
}

export const validationSchema = object().shape({
    gender: string().required(),
})

export const initialValues = {}
