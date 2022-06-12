import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UserAddPost from '../components/user/UserAddPost';
import UserViewPost from '../components/user/UserViewPost';

export default function UserPage() {
    const [showAddPost, setShowAddPost] = useState(false);
    const [showViewPost, setShowViewPost] = useState(false);

    return (
        <>
            <Button
                type='button'
                show={showAddPost.toString()}
                variant='success'
                onClick={() => {
                    setShowAddPost(!showAddPost);
                }}>
                Add Post
            </Button>
            <div>
                {showAddPost ? <UserAddPost /> : null}
            </div>
            <Button
                type='button'
                show={showViewPost.toString()}
                variant='success'
                onClick={() => {
                    setShowViewPost(!showViewPost);
                }}>
                View Posts
            </Button>
            <div>
                {showViewPost ? <UserViewPost /> : null}
            </div>
        </>        
    );
};