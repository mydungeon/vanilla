export default interface AlertProps {
    children?: JSX.Element[] | JSX.Element
}

export interface Alert {
    message: string
    type: string
    timestamp: string
}
