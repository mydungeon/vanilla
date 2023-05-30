export function validate(values: any) {
    const errors: any = {}

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    return errors
}
