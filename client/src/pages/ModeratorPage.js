import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModeratorAddPost from '../components/moderator/ModeratorAddPost';
import ModeratorApprovePost from '../components/moderator/ModeratorApprovePost';
import ModeratorRemoveUser from '../components/moderator/ModeratorRemoveUser';

export default function ModeratorPage() {

    const [showAddPostButton, setShowAddPostButton] = useState(false);

    const [showApprovePostButton, setShowApprovePostButton] = useState(false);

    const [showRemoveUserButton, setShowRemoveUserButton] = useState(false);

    return (
        <div className="d-inline-flex subpage full-width">
            <div className="stars" />
            <div className="stars2" />
            <div className="stars3" />
            <h3 className="align-self-center col-6 text-center">Welcome, {localStorage.getItem('username')}</h3>
            <div className="d-inline-flex col-5">
                <div className="col-4">
                    <Button
                        type='button'
                        onClick={() => {
                            setShowAddPostButton(!showAddPostButton);
                        }}>
                        <h4>Add Post</h4>
                    </Button>
                    {showAddPostButton ? <ModeratorAddPost /> : null}
                </div>
                <div className="col-4">
                    <Button
                        type='button'
                        onClick={() => {
                            setShowApprovePostButton(!showApprovePostButton);
                        }}>
                        <h4>Approve Post</h4>
                    </Button>
                    {showApprovePostButton ? <ModeratorApprovePost /> : null}
                </div>
                <div className="col-4">
                    <Button
                        type='button'
                        variant='success'
                        onClick={() => {
                            setShowRemoveUserButton(!showRemoveUserButton);
                        }}>
                       <h4>Remove User</h4>
                    </Button>
                    {showRemoveUserButton ? <ModeratorRemoveUser /> : null}
                </div>
            </div>
        </div>
    );
}