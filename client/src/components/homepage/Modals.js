import React from 'react';
import { useQuery } from '@apollo/client';
import { POST } from '../../utils/queries';

export default function Modals() {

    const { loading, error, data } = useQuery(POST, { variables: { '_id': localStorage.getItem('_id') } });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div id="blac-text">
            <h4>{data.post.title}</h4>
            <figure>
                <img src={require("../../images/" + data.post.image).default} alt="No Image to Show" />
            </figure>
            <div>
                <p>{data.post.content}</p>
            </div>
            <a href={data.post.link} target="_blank" rel="noopener noreferrer">{data.post.link}</a>
        </div>
    )
}