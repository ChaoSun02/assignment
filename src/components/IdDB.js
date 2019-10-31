import React from 'react';
import PostData from '../rDBinfo.json';

function IdDB (props){
    return(
        <div>
            {PostData.map((postDetail, index)=>{
                if(postDetail.id===props.VarId){
                    return <div>{postDetail.id}</div>
                }             
            })}
        </div>
    )
}

export default IdDB;