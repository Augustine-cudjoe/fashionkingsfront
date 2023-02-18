import React from "react";
import'./App.css';
import ComponentC from "./context-component/componentC";

 
export const UserContext =React.createContext()
export const ChannelContext=React.createContext()
export const OtherContext=React.createContext()
const App =()=>{

 return(
    <div className="App">
       <UserContext.Provider value={'ak'}>
       <ChannelContext.Provider value={'code evolution'}>
       <OtherContext.Provider value={'universal'}>
       <ComponentC/>
       </OtherContext.Provider>
    
    
       </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
 )
}
export default App;