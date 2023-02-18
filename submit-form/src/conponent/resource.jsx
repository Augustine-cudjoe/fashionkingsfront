import React, { useState,useEffect } from 'react';

const Resource = () => {
    const [resourceType,setResourceType]=useState('post')
    //componentDidMounth
    useEffect(()=>{
        console.log("I render");
    })
    useEffect(()=>{
        console.log("The component mounted")
    },[])
    //componentDidUpdate
    useEffect(()=>{
        console.log("I re-render:${resourceType}");
    } ,[resourceType])

    return ( 
        <div>
            <button onClick={()=>setResourceType('post')}>Post</button>
            <button onClick={()=>setResourceType('comments')}>comment</button>
            <button onClick={()=>setResourceType('user')}>user</button>
        </div>
     );
}
 
export default Resource;