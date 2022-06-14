import React from 'react';
import { useQuery } from '@apollo/client';
import { POST } from '../../utils/queries';

export default function Modals() {

    const { loading, error, data } = useQuery(POST, { variables: { '_id': localStorage.getItem('_id') } });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="modals">
            <h4>{data.post.title}</h4>
            <div>
                <p><pre>{data.post.content}</pre></p>
                <p>Read the Full Article Below</p>
            </div>
            <a href={data.post.link} target="_blank" rel="noopener noreferrer">{data.post.link}</a>
        </div>
    )
}