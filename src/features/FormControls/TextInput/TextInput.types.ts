export default interface TextInputProps {
    controlId?: string
    error?: string
    formControlClasses?: string
    formGroupClasses?: string
    isInvalid?: boolean
    isValid?: boolean
    label?: string
    maxLength?: number
    name: string
    onChange?: (e: any) => void
    placeholder: string
    message?: string
    type: string
    value?: string
}
