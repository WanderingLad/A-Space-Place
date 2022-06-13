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
        <div className="d-inline-flex subpage">
            <h3 className="align-self-center">Welcome Jackass</h3>
            <div className="d-inline-flex">
                <div>
                    <Button
                        type='button'
                        variant='success'
                        onClick={() => {
                            setShowAddPostButton(!showAddPostButton);
                        }}>
                        Add Post
                    </Button>
                    {showAddPostButton ? <ModeratorAddPost /> : null}
                </div>
                <div>
                    <Button
                        type='button'
                        variant='success'
                        onClick={() => {
                            setShowApprovePostButton(!showApprovePostButton);
                        }}>
                        Approve Post
                    </Button>
                    {showApprovePostButton ? <ModeratorApprovePost /> : null}
                </div>
                <div>
                <Button
                    type='button'
                    variant='success'
                    onClick={() => {
                        setShowRemoveUserButton(!showRemoveUserButton);
                    }}>
                    Remove User
                </Button>
                    {showRemoveUserButton ? <ModeratorRemoveUser /> : null}
                </div>
            </div>
        </div>
    );
}