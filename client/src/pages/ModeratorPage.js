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
        <>
            <Button
                type='button'
                variant='success'
                onClick={() => {
                    setShowAddPostButton(!showAddPostButton);
                }}>
                Add Post
            </Button>
            <div>
                {showAddPostButton ? <ModeratorAddPost /> : null}
            </div>
            <Button
                type='button'
                variant='success'
                onClick={() => {
                    setShowApprovePostButton(!showApprovePostButton);
                }}>
                Approve Post
            </Button>
            <div>
                {showApprovePostButton ? <ModeratorApprovePost /> : null}
            </div>
            <Button
                type='button'
                variant='success'
                onClick={() => {
                    setShowRemoveUserButton(!showRemoveUserButton);
                }}>
                Remove User
            </Button>
            <div>
                {showRemoveUserButton ? <ModeratorRemoveUser /> : null}
            </div>
        </>
    );
}