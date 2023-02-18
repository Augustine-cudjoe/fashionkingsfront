import React,{useRef, useState} from 'react';
 
const Counter1=()=>{
     const initialValue=0;
    const [count,setCount]=useState(initialValue);
  
    
     
    const incrementHandler=()=>{
        setCount((previus)=> previus + 1)
    }
    const decrementHandler=()=>{
        setCount((previus) => previus - 1)
    }
    const resetCount=()=>{
        setCount(initialValue)
    }
   
    return(
        <div>
            <button>{count}</button><br/>
        <button onClick={decrementHandler}> substract</button>
         <button onClick={incrementHandler}>Increment</button>
          <button onClick={resetCount}>Reset</button>
        </div>
    )

}
export default Counter1;