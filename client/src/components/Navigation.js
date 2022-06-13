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
      <Navbar bg='none' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {Auth.loggedIn() ? (
                localStorage.getItem("user") === "Moderator" ?
                  <div className="d-inline-flex">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/mod'>{localStorage.getItem('username')}</Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </div> :
                  <div className="d-inline-flex">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/user'>{localStorage.getItem('username')}</Nav.Link>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </div>) : (
                <div className="d-inline-flex">
                  <Nav.Link as={Link} to='/'>Home</Nav.Link>
                  <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'
        id="nav-modal-container"
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