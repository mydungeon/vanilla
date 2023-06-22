import React from 'react'
import { Modal } from 'react-bootstrap'
import UserActionsModalProps from './UserActionsModal.types'

export default function UserActionsModal({
    children,
    ...props
}: UserActionsModalProps) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            data-testid="userActionsModal"
        >
            <Modal.Header closeButton />
            <Modal.Body>User Actions Modal Content</Modal.Body>
        </Modal>
    )
}
