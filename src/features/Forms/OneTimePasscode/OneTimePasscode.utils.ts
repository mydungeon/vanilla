export function validate(values: any) {
    const errors: any = {}

    if (!values['otp-0']) {
        errors['otp-0'] = 'Required'
    }
    if (!values['otp-1']) {
        errors['otp-1'] = 'Required'
    }
    if (!values['otp-2']) {
        errors['otp-2'] = 'Required'
    }
    if (!values['otp-3']) {
        errors['otp-3'] = 'Required'
    }

    return errors
}
