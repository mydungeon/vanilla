export interface ProfileProps {
    children?: JSX.Element[] | JSX.Element
}
export interface Profile {
    dob: string
    gender: 'f' | 'm'
    id: string
    fileName: string
    orientation: 'f' | 'm' | 'b'
    zipCode: string
}
