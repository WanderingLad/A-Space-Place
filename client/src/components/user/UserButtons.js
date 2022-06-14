import React, { useState } from 'react';
import { Modal, Tab, Button } from 'react-bootstrap';
import UserAddPost from './UserAddPost';
import UserViewPost from './UserViewPost';

export default function UserButtons() {

    const [showUserAdd, setShowUserAdd] = useState(false);

    const [showUserView, setShowUserView] = useState(false);

    return (
        <div>
            <div className="d-flex text-center">
                <div className="col-6">
                    <Button
                        type='button'
                        onClick={(e) => {e.preventDefault(); setShowUserAdd(true); }}>
                        Add Post
                    </Button>
                </div>
                <div className="col-6">
                    <Button
                        type='button'
                        onClick={ (e) => {e.preventDefault(); setShowUserView(true); }}>
                        View Posts
                    </Button>
                </div>
            </div>

            <Modal
                size='lg'
                show={showUserAdd}
                onHide={() => setShowUserAdd(false)}
                aria-labelledby='homepage-modal'
                className="m-container"
            >
                <Tab.Container defaultActiveKey='userAddPost'>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='userAddPost'>
                                <UserAddPost handleModalClose={() => setShowUserAdd(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>

            <Modal
                size='lg'
                show={showUserView}
                onHide={() => setShowUserView(false)}
                aria-labelledby='homepage-modal'
                className="m-container"
            >
                <Tab.Container defaultActiveKey='userViewPost'>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='userViewPost'>
                                <UserViewPost handleModalClose={() => setShowUserView(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </div>
    )
}