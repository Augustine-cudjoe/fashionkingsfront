import React,{useEffect,useState} from 'react';
import axios from 'axios';
const DataFeching = () => {
    const [post,setPost] =useState({})
    const [id,setId]=useState(1)
     
   /* const individaulId=()=>{
        setId(e=>{ e.target.value})
    }*/
 const handler=()=>{
       setId(id+1)
    }
const handlerDecrease =()=>{
    setId(id-1)
}

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>{
    console.log(res);
    setPost(res.data)
 })
 .catch(err=>{
    console.log(err)
 })
},[handler,handlerDecrease])

    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)} />
            <button onClick={handler} >Fetch Post</button>
            <button onClick={handlerDecrease}> Reduce Post</button>
          <div>{post.title}</div>
          

        </div>
      );
}
 
export default DataFeching;