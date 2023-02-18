import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    
    render() { 
       // const {onClick,onDelete,onReset,onIncrement}=this.props
        return (
        <div>
            <div onClick={this.props.onReset} 
            className="button btn btn-primary btn-sm">
              Reset
            </div>
            {this.props.counters.map(counter=> 
            <Counter 
             key={counter.id}
             onDelete={this.props.onDelete }
             onIncrement={this.props.onIncrement}
              counter={counter} 
              /> 
            ) }
           
            
        </div>);
    }
}
 
export default Counters ;