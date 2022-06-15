import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

import SignUpForm from './homepage/SignupForm';
import UserLoginForm from './user/UserLoginForm';
import ModeratorLoginForm from './moderator/ModeratorLoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="col-6">
      <Navbar bg='none' expand='lg'>
        <Container fluid>
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {Auth.loggedIn() ? (
                <div className="d-flex">
                  <h5 className="align-self-center px-3">Welcome, {localStorage.getItem('username')}</h5>
                  <Nav.Link onClick={() => { Auth.logout(); localStorage.setItem('user', ""); }}><h5>Logout</h5></Nav.Link>
                </div>)
                :
                <Nav.Link onClick={() => setShowModal(true)}><h5>Login/Signup</h5></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        className="m-container"
      >
        <Tab.Container defaultActiveKey='userLogin'>

          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>

                <Nav.Item>
                  <Nav.Link eventKey='userLogin'>User Login</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='moderatorLogin'>Moderator Login</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey='userSignup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Tab.Content>

              <Tab.Pane eventKey='userLogin'>
                <UserLoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>

              <Tab.Pane eventKey='moderatorLogin'>
                <ModeratorLoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>

              <Tab.Pane eventKey='userSignup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </div>
  );
};

export default AppNavbar;