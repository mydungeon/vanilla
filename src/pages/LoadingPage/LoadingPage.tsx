import React from 'react'
import Page from 'src/features/Page'
import heartPreloader from 'src/assets/gif/heart-preloader.gif'
import { Col, Container, Image, Row } from 'react-bootstrap'

export default function LoadingPage() {
    return (
        <Container fluid className="d-flex flex-column vh-100">
            <Row className="flex-grow-1 align-items-center">
                <Col className="justify-content-center">
                    <Page classNames="text-center" h1Text="Loading...">
                        <Image src={heartPreloader} />
                    </Page>
                </Col>
            </Row>
        </Container>
    )
}
