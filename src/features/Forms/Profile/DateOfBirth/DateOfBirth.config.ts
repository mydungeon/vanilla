import { number, object } from 'yup'

export function validate(values: any) {
    const errors: any = {}

    if (
        !values.month &&
        !/^SW\d{2}$/i.test(values.month) &&
        !values.day &&
        !/^SW\d{2}$/i.test(values.day) &&
        !values.year &&
        !/^SW\d{4}$/i.test(values.year)
    ) {
        errors.month = 'Required'
        errors.day = 'Required'
        errors.year = 'Required'
    }
    return errors
}

export const validationSchema = object().shape({
    month: number().required(),
    day: number().required(),
    year: number().required(),
})

export const initialValues = {
    month: 'MM',
    day: 'DD',
    year: 'YYYY',
}
