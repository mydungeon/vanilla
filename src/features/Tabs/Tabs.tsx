import React from 'react'
import { useLocation } from 'react-router-dom'
import TabsProps, { TabProps } from './Tabs.types'
import { Nav } from 'react-bootstrap'

function Tab({ ...props }: TabProps) {
    const { text, to } = props
    return (
        <Nav.Item>
            <Nav.Link className={'text-dark'} href={to}>
                {text}
            </Nav.Link>
        </Nav.Item>
    )
}

export default function Tabs({ classNames, tabs }: TabsProps) {
    const location = useLocation()
    return (
        <Nav
            activeKey={location.pathname}
            className={classNames}
            data-testid="tabs"
            justify
        >
            {tabs.map((tab, index) => (
                <Tab key={index} {...tab} />
            ))}
        </Nav>
    )
}
