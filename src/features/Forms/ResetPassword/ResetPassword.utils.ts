export function validate(values: any) {
    const { password, passwordConfirm } = values
    const errors: any = {}
    if (!password) {
        errors.password = 'Required'
    }
    if (password !== passwordConfirm) {
        errors.passwordConfirm = 'Confirmed password does not match'
    }
    return errors
}
