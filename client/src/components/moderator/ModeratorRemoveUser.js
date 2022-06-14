import React from "react";
import { Button } from 'react-bootstrap';
import { useQuery, } from '@apollo/client';
import { USERS } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { REMOVE_USER } from '../../utils/mutations';

export default function ModeratorRemoveUser() {
    const { loading, error, data } = useQuery(USERS);

    const [removeUser] = useMutation(REMOVE_USER);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ul className="overflow-posts overflow-auto">
            {data.users.map((body) => {
                return (
                    <section id={body.username} key={body._id}>
                        <div >
                            <h4>{body.username}</h4>
                            <h4>{body.email}</h4>

                            <Button
                                type='button'
                                onClick={() => {
                                    removeUser({ variables: { '_id': body._id } });
                                    window.location.assign('/');
                                }}>
                                Remove User
                            </Button>
                        </div>
                    </section>
                )
            })}
        </ul>
    );
};