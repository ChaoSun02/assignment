import React from 'react';
import PostData from './rDBinfo.json';

function ImpDB (){
    return(
        <div>
             {PostData.map((postDetail, index)=>{
            return (<div><p>{postDetail.id}</p> <h3>{postDetail.text1}</h3></div>)
            })}
        </div>
    )
}

export default ImpDB;