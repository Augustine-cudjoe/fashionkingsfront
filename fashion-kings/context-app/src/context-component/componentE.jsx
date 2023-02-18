import React,{useContext} from 'react';
import ComponentF from './componentF';
import { UserContext,ChannelContext, OtherContext } from '../App';

const ComponentE = () => {
   const user= useContext(UserContext);
   const channel=useContext(ChannelContext);
   const other=useContext(OtherContext);
    return ( 
        <div>
            {user}-{channel}-{other}
        </div>
     );
}
 
export default ComponentE;