import React,{useState, useEffect} from "react";

const IntervalCounter = () => {
    const [count ,setCount]=useState(0);

    const tick=()=>{
        setCount(count+1)
    }
   useEffect(()=>{
    const interval= setInterval(tick,1000)
    console.log("this is my time counter ")
     return ()=>{
        clearInterval(interval)
     }
   },[tick])

    return (  
        <div>
         {count}
        </div>
    );
}
 
export default IntervalCounter;