import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            array:[25],
            message:'welcome home'
        }
    }
    changeHandle(){
        this.setState({
            message:'I am back home',
            array:40
        })
    }
    render() { 
        return ( 
            <div>
            <p>I am {this.state.message}</p>
            <h1> {this.state.array}</h1>
            <button type='button' onClick={()=>this.changeHandle()}> welcome</button>
            </div>
         );
    }
}
 
export default MyComponent;