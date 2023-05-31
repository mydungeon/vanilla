export function validate(values: any) {
    const errors: any = {}

    if (!values.one) {
        errors.one = 'Required'
    }
    if (!values.two) {
        errors.two = 'Required'
    }
    if (!values.three) {
        errors.three = 'Required'
    }
    if (!values.four) {
        errors.four = 'Required'
    }

    return errors
}
