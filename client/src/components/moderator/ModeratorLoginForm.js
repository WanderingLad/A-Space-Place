import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../../utils/auth';

import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_MODERATOR } from '../../utils/mutations';

import { MODERATOR } from '../../utils/queries';

export default function ModeratorLoginForm() {
  const [moderatorFormData, setmoderatorFormData] = useState({ email: '', password: '' });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const [moderatorLogin, { error }] = useMutation(LOGIN_MODERATOR);

  const { data } = useQuery(MODERATOR, { variables: { 'email': moderatorFormData.email } });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setmoderatorFormData({ ...moderatorFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await moderatorLogin(
        { variables: { ...moderatorFormData } }
      );
      Auth.login(data.token);
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    setmoderatorFormData({ username: '', email: '', password: '' });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Alert dismissible onClose={() => setShowSuccess(false)} show={showSuccess} variant='success'>
          You are logged in as a Moderator! You can close out of the modal!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={moderatorFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={moderatorFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(moderatorFormData.email && moderatorFormData.password)}
          type='submit'
          variant='success'
          onClick={() => {
            localStorage.setItem('username', data.moderator.username);
            localStorage.setItem('user', "Moderator");
          }}>
          Submit
        </Button>
      </Form>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </>
  );
};