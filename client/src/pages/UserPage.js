import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UserAddPost from '../components/user/UserAddPost';
import UserViewPost from '../components/user/UserViewPost';

export default function UserPage() {
    const [showAddPost, setShowAddPost] = useState(false);
    const [showViewPost, setShowViewPost] = useState(false);

    return (
        <div className="d-inline-flex subpage full-width">
            <div className="stars" />
            <div className="stars2" />
            <div className="stars3" />
            <h3 className="align-self-center col-6 text-center">Welcome, {localStorage.getItem('username')}</h3>
            <div className="d-inline-flex col-5">
                <div className="col-6">
                    <Button
                        type='button'
                        show={showAddPost.toString()}
                        onClick={() => {
                            setShowAddPost(!showAddPost);
                        }}>
                        <h4>Add Post</h4>
                    </Button>
                    <div>
                        {showAddPost ? <UserAddPost /> : null}
                    </div>
                </div>
                <div className="col-6">
                    <Button
                        type='button'
                        show={showViewPost.toString()}
                        onClick={() => {
                            setShowViewPost(!showViewPost);
                        }}>
                        <h4>View Posts</h4>
                    </Button>
                    <div>
                        {showViewPost ? <UserViewPost /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};