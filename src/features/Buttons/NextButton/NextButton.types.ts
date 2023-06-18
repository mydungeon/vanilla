export default interface NextButtonProps {
    handleNext?: () => void
    text: string
    type?: 'button' | 'submit' | 'reset' | undefined
}
