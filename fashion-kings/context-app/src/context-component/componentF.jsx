import React from 'react';
import {UserContext,ChannelContext, OtherContext} from '../App'
const ComponentF = () => {
    return ( 
        <UserContext.Consumer>
            {
                user=>{
                    return (
                        (<ChannelContext.Consumer>
                            {
                                channel=>{
                                  return  (
                                    <OtherContext.Consumer>
                                       {other=>{
                                        return (<div> User context value{user},
                                            channel context value{channel} and my other channel is {other}
                                            </div>)
                                       }
                                            
                                           
                                        }
                                    </OtherContext.Consumer>
                                  )
                                }
                            }
                        </ChannelContext.Consumer>)
                    )
                   
                }

            }
        </UserContext.Consumer>
     );
}
 
export default ComponentF;
