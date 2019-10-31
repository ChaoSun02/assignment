import React from 'react';
import IdDB from './IdDB.js';
import NameDB from './NameDB.js';
import SurnameDB from './SurnameDB.js';
import './List.css';

function List(){
    return (
        <ul> {/*This ul shows the contents of the JSON file */}
            <li>
                <div className="flex-container"> {/*Each of IdDB, NameDB, SurnameDB shows the contents tha correspont to the id that matches VarId */}
                    <p><IdDB VarId={1}/></p>
                    <p><NameDB VarId={1}/></p>
                    <p><SurnameDB VarId={1}/></p>
                </div>
            </li>
            <li>
                <div className="flex-container">
                    <p><IdDB VarId={2}/></p>
                    <p><NameDB VarId={2}/></p>
                    <p><SurnameDB VarId={2}/></p>
                </div>
            </li>
            <li>
                <div className="flex-container">
                    <p><IdDB VarId={3}/></p>
                    <p><NameDB VarId={3}/></p>
                    <p><SurnameDB VarId={3}/></p>
                </div>
            </li>
            <li>
                <div className="flex-container">
                    <p><IdDB VarId={4}/></p>
                    <p><NameDB VarId={4}/></p>
                    <p><SurnameDB VarId={4}/></p>
                </div>
            </li>
        </ul>
    )
}

export default List;