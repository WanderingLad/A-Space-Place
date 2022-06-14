import React from 'react';
import UserButtons from '../user/UserButtons';
import ModeratorButtons from '../moderator/ModeratorButtons'

export default function Buttons() {

    return (
        <div>
            {localStorage.getItem('user') === "" ? console.log("sad!") :
                (localStorage.getItem('user') === "User" ?
                    <UserButtons /> :
                    <ModeratorButtons />
                )}
        </div>
    )
}