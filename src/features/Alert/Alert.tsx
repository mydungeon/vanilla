import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addAlert } from 'src/appState/alertsSlice'
import { Toast, ToastContainer } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Alert as AlertType } from './Alert.types'

export default function Alert() {
    const [show, setShow] = useState(true)
    const alerts = useSelector((state: any) => state.alerts)

    /*
function Errors() {
    const dispatch = useDispatch()
    const { errors } = useFormikContext()
    useEffect(() => {
        console.log('errors', errors)
        dispatch(
            addAlert([{ message: 'test', type: 'invalid', timestamp: 'test' }])
        )
    }, [dispatch, errors])
    return null
}
*/
    // console.log('alerts', alerts)
    return (
        <ToastContainer
            containerPosition="absolute"
            position="top-end"
            className="p-3"
            style={{ zIndex: 1 }}
        >
            {alerts.map(
                ({ message, type, timestamp }: AlertType, index: number) => (
                    <div
                        key={`alert-${index}`}
                        className="alert"
                        data-testid={`alert-${index}`}
                    >
                        <Toast
                            onClose={() => setShow(false)}
                            show={show}
                            delay={3000}
                            animation={true}
                        >
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">{message}</strong>
                                <small className="text-muted">
                                    {timestamp}
                                </small>
                            </Toast.Header>
                            <Toast.Body>{`${message} ${index}`}</Toast.Body>
                        </Toast>
                    </div>
                )
            )}
        </ToastContainer>
    )
}
