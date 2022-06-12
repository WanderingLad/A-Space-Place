//import { Link } from 'react-router-dom';
//import { useQuery, useMutation } from '@apollo/client';
import React from "react";
import Navigation from '../components/Navigation';

export default function Header() {
    return (
        <div className="full-width">
            <div  className="full-width d-inline-flex">
                <div className="col-6 align-self-center">
                    <img src={require('../images/SpaceWalk.png').default} alt="Logo"/>
                </div>
                <Navigation />

            </div>
            <hr />
        </div>
    );
};