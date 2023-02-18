import React,{useState} from 'react';

const HookStateArray = () => {
    
    const [item,setItem]=useState([]);
   
    const addItem=()=>{
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random() *10)+1
        }])
        

    }
    const resetTab=()=>{
        setItem([])
    }
    return ( 
        <div><button>{reset}</button>
            <button onClick={addItem}>AddItem</button>
            <button onClick={resetTab}>Reset</button>
            <ul>
                {
                    item.map(item=>(<li key={item.id}> {item.value} </li>))
                }
            </ul>
        </div>
     );
}
 
export default HookStateArray;
