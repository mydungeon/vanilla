import React from 'react'
import ChatModalProps from './ChatModal.types'
import { Offcanvas } from 'react-bootstrap'

export default function ChatModal({ children, ...props }: ChatModalProps) {
    return (
        <>
            <Offcanvas {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
