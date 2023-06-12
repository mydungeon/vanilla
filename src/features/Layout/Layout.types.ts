export default interface LayoutProps {
    isDarkTheme: boolean
    hasLogo: boolean
    left?: JSX.Element[] | JSX.Element
    main?: JSX.Element[] | JSX.Element
    progress?: number
    right?: JSX.Element[] | JSX.Element
}
