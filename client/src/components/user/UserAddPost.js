import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';

export default function UserAddPost() {
    const [userPostData, setUserPostData] = useState({ user: localStorage.getItem('username'), body: 'Sun', title: '', content: '', link: '', image: '' });

    console.log(userPostData);

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [showSuccess, setShowSuccess] = useState(false);

    const [addPost, { error }] = useMutation(ADD_POST);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserPostData({ ...userPostData, [name]: value });
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
                { variables: { ...userPostData } }
            );
            console.log(data);
            setShowSuccess(true);
            window.location.reload();
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }
        setUserPostData({ body: '', title: '', content: '', link: '', image: '' });
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
                        value={userPostData.body}
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
                    <Form.Label htmlFor='title'>Post Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Title'
                        name='title'
                        onChange={handleInputChange}
                        value={userPostData.title}
                    />
                    <Form.Control.Feedback type='invalid'>This is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='content'>Content</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={4}
                        placeholder='Content'
                        name='content'
                        onChange={handleInputChange}
                        value={userPostData.content}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>This is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor='link'>Relevant Link</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Link'
                        name='link'
                        onChange={handleInputChange}
                        value={userPostData.link}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='image'>Relevant Image</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Image'
                        name='image'
                        onChange={handleInputChange}
                        value={userPostData.image}
                    />
                </Form.Group>
                <Button
                    disabled={!(userPostData.body && userPostData.content)}
                    type='submit'
                    variant='success'
                    onClick={() => {
                        console.log(userPostData);
                    }}>
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