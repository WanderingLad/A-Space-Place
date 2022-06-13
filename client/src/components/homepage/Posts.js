import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { POSTS } from '../../utils/queries';
import { useSelector } from 'react-redux';
import { Modal, Tab } from 'react-bootstrap';
import Modals from './Modals'

export default function Posts() {

    const [showModal, setShowModal] = useState(false);

    const state = useSelector((state) => state);

    const { loading, error, data } = useQuery(POSTS, { variables: { 'body': state.activeModule } });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ul id="posts-ul" className='overflow-auto h-75 align-self-center full-width'>
            {data.posts.map((body) => {
                if (body.approved) {
                    return (
                        <li key={body.id}>
                            <Link to="/" onClick={() => { localStorage.setItem('_id', body._id); setShowModal(true) }}><h3 id="repeating-title">{body.title}</h3></Link>
                        </li>
                    )
                }
                else {
                    return;
                }
            })}

            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='post-modal'
                id="modal-container"
            >
                <Tab.Container defaultActiveKey='post'>
                    <Modal.Body>
                        <Tab.Content>
                            <Tab.Pane eventKey='post'>
                                <Modals handleModalClose={() => setShowModal(false)} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </ul>
    )
}