import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    };
    changeCount(){
       /* this.setState({
          count:this.state.count+1
        })
        */
       this.setState((previus)=>({
              count:previus.count+1
       }))
     }
     changeDelete(){
        this.setState((previus)=>({
            count:previus.count-1
        } ),console.log(this.state.count))
     }
     incrementFive(){
        this.changeCount() 
        this.changeCount()
        this.changeCount()
        this.changeCount()
        this.changeCount()
     }
     deleteFive(){
        this.changeDelete()
        
     }
    
    render() { 
        return ( 
            <div>
                <p> {this.state.count}</p>
                <button onClick={()=>this.incrementFive()}> Inclement</button>
                <button onClick={()=>this.deleteFive()}>Delete</button>
            </div>
         );
    }
}
 
export default Counter;