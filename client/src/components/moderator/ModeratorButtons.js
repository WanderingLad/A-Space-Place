import React, { useState } from 'react';
import { Modal, Tab, Button } from 'react-bootstrap';
import ModeratorAddPost from '../moderator/ModeratorAddPost';
import ModeratorApprovePost from '../moderator/ModeratorApprovePost';
import ModeratorRemoveUser from '../moderator/ModeratorRemoveUser';

export default function Buttons() {

    const [showModAdd, setShowModAdd] = useState(false);

    const [showModApprove, setShowModApprove] = useState(false);

    const [showModRemove, setShowModRemove] = useState(false);

    return (
        <div>
            <div className="d-flex">
                <div className="col-4 text-left">
                    <Button
                        type='button'
                        onClick={(e) => {e.preventDefault(); setShowModAdd(true); }}>
                        Add Post
                    </Button>
                </div>
                <div className="col-4 text-center">
                    <Button
                        type='button'
                        onClick={(e) => {e.preventDefault(); setShowModApprove(true); }} >
                        Approve Post
                    </Button>
                </div>
                <div className="col-4 text-right">
                    <Button
                        type='button'
                        onClick={(e) => {e.preventDefault(); setShowModRemove(true); }}>
                        Remove User
                    </Button>
                </div>
            </div>


            <Modal
                size='lg'
                show={showModAdd}
                onHide={() => setShowModAdd(false)}
                aria-labelledby='homepage-modal'
                className="m-container"
            >
                <Tab.Container defaultActiveKey='modAddPost'>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='modAddPost'>
                                <ModeratorAddPost handleModalClose={() => setShowModAdd(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>

            <Modal
                size='lg'
                show={showModApprove}
                onHide={() => setShowModApprove(false)}
                aria-labelledby='homepage-modal'
                className="m-container"
            >
                <Tab.Container defaultActiveKey='modAddApprove'>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='modAddApprove'>
                                <ModeratorApprovePost handleModalClose={() => setShowModApprove(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>

            <Modal
                size='lg'
                show={showModRemove}
                onHide={() => setShowModRemove(false)}
                aria-labelledby='homepage-modal'
                className="m-container"
            >
                <Tab.Container defaultActiveKey='modRemoveUser'>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='modRemoveUser'>
                                <ModeratorRemoveUser handleModalClose={() => setShowModRemove(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </div>
    )
}