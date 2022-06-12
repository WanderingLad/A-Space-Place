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
        <>
            {data.users.map((body) => {
                return (
                    <section id={body.username} key={body._id}>
                        <div >
                            <h2>{body.username}</h2>
                            <h2>{body.email}</h2>
                        </div>
                        <Button
                            type='button'
                            variant='success'
                            onClick={() => {
                                removeUser({ variables: { '_id': body._id } });
                                window.location.reload();
                            }}>
                            Remove User
                        </Button>
                    </section>
                )
            })}
        </>
    );
};