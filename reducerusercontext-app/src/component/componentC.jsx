import React, { useContext } from 'react';
import { CountContext } from '../App';


const ComponentC = () => {
    const countContext=useContext(CountContext)
    return ( 
        <div>
            Component C
       <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}> reset</button>
  
        </div>
     );
}
 
export default ComponentC;