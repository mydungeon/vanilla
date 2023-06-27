import React, { useState } from 'react'
import ChatModalProps from './ChatModal.types'
import {
    Button,
    Col,
    Container,
    Form,
    Offcanvas,
    Row,
    Stack,
} from 'react-bootstrap'
import data from 'src/mockData/chatMessages.mock.json'
import { BsSend } from 'react-icons/bs'
import Chat from 'src/features/Chat'
import useAuth from 'src/hooks/useAuth'

export default function ChatModal({ children, ...props }: ChatModalProps) {
    const [message, setMessage] = useState('')
    const [isLoggedIn, user] = useAuth()
    const { id }: any = user || {}
    return (
        <>
            <Offcanvas {...props}>
                <Offcanvas.Header className="text-dark" closeButton />
                <Offcanvas.Body>
                    <Container
                        fluid
                        className="d-flex flex-column"
                        style={{ height: `calc(100% - 3rem)` }}
                    >
                        <Row
                            className="d-flex flex-column-reverse mb-3 align-items-end overflow-auto"
                            style={{ height: `calc(100% - 2rem)` }}
                        >
                            <Col className="p-0">
                                {data.data.map((message, index) => {
                                    return (
                                        <Chat.Bubble
                                            key={index}
                                            isMe={message.id === id}
                                            message={message.message}
                                            date={message.date}
                                        />
                                    )
                                })}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-0">
                                <Stack direction="horizontal">
                                    <Form className="d-flex w-100">
                                        <Form.Control
                                            className="border border-dark borderend-0 rounded-0 rounded-start"
                                            maxLength={140}
                                            name="chatInput"
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            placeholder="Say something nice"
                                            size="lg"
                                            type="text"
                                            value={message}
                                        />
                                        <Button className="bg-dark border border-dark borderstart-0 rounded-0 rounded-end">
                                            <BsSend size={20} />
                                        </Button>
                                    </Form>
                                </Stack>
                            </Col>
                        </Row>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
