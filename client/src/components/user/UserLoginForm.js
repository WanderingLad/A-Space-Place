import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Auth from '../../utils/auth';

import { useMutation, useQuery } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { USER } from '../../utils/queries';

export default function UserLoginForm() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });

  const [validated] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const [userLogin, { error }] = useMutation(LOGIN_USER);

  const { data } = useQuery(USER, { variables: { 'email': userFormData.email } });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await userLogin(
        { variables: { ...userFormData } }
      );
      Auth.login(data.token);
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    setUserFormData({ username: '', email: '', password: '' });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Alert dismissible onClose={() => setShowSuccess(false)} show={showSuccess} variant='success'>
          You are logged in as a User! You can close out of the modal!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
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
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          onClick={() => {
            localStorage.setItem('username', data.user.username);
            localStorage.setItem('user', "User");
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