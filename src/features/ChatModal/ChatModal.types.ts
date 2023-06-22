export default interface ChatModalProps {
    children?: JSX.Element[] | JSX.Element
    onHide: () => void
    placement: 'start' | 'end' | 'top' | 'bottom'
    show: boolean
}
