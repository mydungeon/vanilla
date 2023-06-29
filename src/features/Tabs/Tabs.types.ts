export default interface TabsProps {
    classNames?: string
    tabs: TabProps[]
}

export interface TabProps {
    text: string
    to: string
}
