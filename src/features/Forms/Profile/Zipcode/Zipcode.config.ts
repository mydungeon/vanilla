import { object, string } from 'yup'

export function validate(values: any) {
    const errors: any = {}

    if (!values.zipCode) {
        errors.zipCode = 'Required'
    }
    return errors
}

export const validationSchema = object().shape({
    zipCode: string().required(),
})

export const initialValues = {
    zipCode: '',
}
