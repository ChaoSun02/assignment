import React from 'react';
import PostData from '../rDBinfo.json';

function SurnameDB (props){
    return(
        <div> {/*Pulls the surnames from the JSON*/}
            {PostData.map((postDetail, index)=>{
                if(postDetail.id===props.VarId){
                    return <div>{postDetail.Surname}</div>
                }
            })}
        </div>
    )
}

export default SurnameDB;