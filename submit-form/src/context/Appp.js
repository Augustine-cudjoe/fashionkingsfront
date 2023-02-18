import React from "react";
import'./App.css';
import ComponetC from "./componentC";
 
export const UserContext =React.createContext()
export  const ChannelContext=React.createContext()
const Appp =()=>{

 return(
    <div className="App">
       <UserContext.Provider value={'ak'}>
        <ChannelContext.Provider value={'Codeevolution'}>
        <ComponentC/>
        </ChannelContext.Provider>
      
       </UserContext.Provider>
    </div>
 )
}
export default Appp;