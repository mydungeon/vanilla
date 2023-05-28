export function validate(values: any) {
    const { email, firstName, lastName, password, passwordConfirm } = values
    const errors: any = {}
    if (!email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!firstName) {
        errors.firstName = 'Required'
    }
    if (!lastName) {
        errors.lastName = 'Required'
    }
    if (!password) {
        errors.password = 'Required'
    }
    if (password !== passwordConfirm) {
        errors.passwordConfirm = 'Confirmed password does not match'
    }
    return errors
}
