import React from 'react';
import PostData from '../rDBinfo.json';

function NameDB (props){
    return(
        <div>
            {PostData.map((postDetail, index)=>{
                if(postDetail.id===props.VarId){
                    return <div>{postDetail.Name}</div>
                }
            })}
        </div>
    )
}

export default NameDB;