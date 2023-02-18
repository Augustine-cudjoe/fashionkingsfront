import React, { useContext } from 'react';
import { CountContext } from '../App';


const ComponentA = () => {
    const countContext=useContext(CountContext)
    return ( 
        <div>
            Component A
          <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
        <button onClick={()=>countContext.countDispatch('reset')}> reset</button>C  
        </div>
     );
}
 
export default ComponentA;