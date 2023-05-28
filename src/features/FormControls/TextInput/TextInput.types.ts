export default interface TextInputProps {
    controlId?: string
    error?: string
    isInvalid?: boolean
    isValid?: boolean
    label?: string
    name: string
    onChange: (e: any) => void
    placeholder: string
    message?: string
    type: string
    value?: string
}
