import React from 'react'
import { Modal } from 'react-bootstrap'
import CarouselModalProps from './CarouselModal.types'
import ImageCarousel from '../ImageCarousel'

export default function CarouselModal({
    children,
    ...props
}: CarouselModalProps) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            data-testid="slideShowModal"
        >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ImageCarousel />
            </Modal.Body>
        </Modal>
    )
}
