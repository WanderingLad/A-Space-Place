import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

export default function ModeratorAddPost() {
    const [moderatorPostData, setModeratorPostData] = useState({ user: "Moderator", body: 'Sun', content: '', link: '', image: '' });

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [showSuccess, setShowSuccess] = useState(false);

    const [addPost, { error }] = useMutation(ADD_POST);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setModeratorPostData({ ...moderatorPostData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        try {
            const { data } = await addPost(
                { variables: { ...moderatorPostData } }
            );
            console.log(data);
            setShowSuccess(true);
            window.location.reload();
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setModeratorPostData({ body: '', content: '', link: '', image: '' });
    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your post!
                </Alert>
                <Alert dismissible onClose={() => setShowSuccess(false)} show={showSuccess} variant='success'>
                    Post Created
                </Alert>
                <Form.Group>
                    <Form.Label htmlFor='body'>Choose a Celestial Body</Form.Label>
                    <Form.Control
                        as="select"
                        name='body'
                        value={moderatorPostData.body}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="Sun">Sun</option>
                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Neptune">Neptune</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Pluto">Pluto</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='link'>Relevant Link</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Link'
                        name='link'
                        onChange={handleInputChange}
                        value={moderatorPostData.link}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='image'>Relevant Image</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Image'
                        name='image'
                        onChange={handleInputChange}
                        value={moderatorPostData.image}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='content'>Post about {moderatorPostData.body}</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Content'
                        name='content'
                        onChange={handleInputChange}
                        value={moderatorPostData.content}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>This is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(moderatorPostData.body && moderatorPostData.content)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
            {
                error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )
            }
        </>
    );
};