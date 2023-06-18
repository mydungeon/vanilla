import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Image, Stack } from 'react-bootstrap'
import NextButton from 'src/features/Buttons/NextButton'
import { useUploadFileMutation } from 'src/appState/fileApi'
import { PROFILE_LINKS } from 'src/app/App.constants'

export default function Pics() {
    const navigate = useNavigate()
    const [file, setFile] = useState()
    const [imageURL, setImageURL] = useState<string>()
    const [
        uploadFile,
        {
            data: uploadFileData,
            isSuccess: isUploadFileSuccess,
            isError: isUploadFileError,
            error: uploadFileError,
        },
    ] = useUploadFileMutation()

    function handleChange(e: any) {
        console.log('file', e.target.files[0])
        setFile(e.target.files[0])
    }

    async function handleSubmit(e: any) {
        e.preventDefault()
        if (file) {
            let newFile = new FormData()
            newFile.append('file', file)
            console.log('newFile', Object.fromEntries(newFile))
            await uploadFile(newFile)
        }
    }

    useEffect(() => {
        if (!file) return
        const newImageURL = URL.createObjectURL(file)
        setImageURL(newImageURL)
    }, [file])

    useEffect(() => {
        if (isUploadFileSuccess) {
            navigate(PROFILE_LINKS.INDEX.to)
        }
    })

    return (
        <div className="pics mb-3" data-testid="pics">
            <Form onSubmit={handleSubmit} className="mb-3">
                <Stack className="mb-3" gap={3}>
                    <div className="m-auto">
                        {imageURL && (
                            <Image
                                alt="myProfilePic"
                                className="mb-4 shadow-sm border-primary"
                                src={imageURL}
                                width="200"
                                rounded
                                fluid
                            />
                        )}
                    </div>
                    <div className="m-auto">
                        <Form.Group controlId="pics">
                            <Form.Control
                                name="image"
                                size="lg"
                                type="file"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </div>
                </Stack>
                <NextButton text="Finish" type="submit" />
            </Form>
        </div>
    )
}
