import React from "react";
import { Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { APPROVE_POST } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_POST, APPROVE_POSTS } from '../../utils/mutations';

export default function ModeratorApprovePost() {
    const { loading, error, data } = useQuery(APPROVE_POST, { variables: { 'approved': false } });

    const [removePost] = useMutation(REMOVE_POST);

    const [approvePosts] = useMutation(APPROVE_POSTS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ul className="overflow-auto overflow-posts">
            {data.approvePost.map((body) => {
                return (
                    <li id={body.body} key={body._id}>
                        <div>
                            <h2>{body.body}</h2>
                        </div>
                        <div id={body.body + '-title'}>
                            {body.title}
                        </div>
                        <div id={body.body + '-desc'}>
                            {body.content}
                        </div>
                        <p>{body.link}</p>

                        <p>Created by: {body.user}</p>

                        <p>Approved: {body.approved.toString()}</p>
                        <Button
                            type='button'
                            onClick={() => {
                                approvePosts({ variables: { '_id': body._id } })
                                window.location.assign('/');
                            }}>
                            Approve Post
                        </Button>
                        <Button
                            type='button'
                            onClick={() => {
                                removePost({ variables: { '_id': body._id } });
                                window.location.assign('/');
                            }}>
                            Remove Post
                        </Button>
                    </li>
                )
            })}
        </ul>
    );
};