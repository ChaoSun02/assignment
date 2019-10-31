import React from 'react';
import './ListName.css';

function ListName(){
    return (
        <ul id="List1">
            <li>
                <div className="flex-container">
                    <p>Id</p>
                    <p>Name</p>
                    <p>Surname</p>
                </div>
            </li>
        </ul>
    )
}

export default ListName;