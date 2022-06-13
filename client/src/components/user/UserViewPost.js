import React from "react";
import { useQuery } from '@apollo/client';
import { USER_POST } from '../../utils/queries';

export default function UserViewPost() {
    const { loading, error, data } = useQuery(USER_POST, { variables: { 'user': localStorage.getItem('username') } });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ul className="overflow-auto overflow-posts">
            {data.userPost.map((body) => {
                return (
                    <li id={body.body} key={body._id}>
                        <div >
                            <h2>{body.body}</h2>
                        </div>
                        <div id={body.body + '-desc'}>
                            {body.content}
                        </div>
                        <p>{body.link}</p>

                        <p>Approved: {body.approved.toString()}</p>
                    </li>
                )
            })}
        </ul>
    );
};