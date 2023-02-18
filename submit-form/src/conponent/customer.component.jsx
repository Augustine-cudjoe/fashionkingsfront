import React ,{Component} from 'react';

class Customer extends Component  {
     constructor(){
        super()
        this.state ={
        message:'Welcome customer',
        age:23
     }
    }

      changeMessage(){
        this.setState({
            message:'Thank you for subscribing',
            age:25

        })
    }
    render(){
    return ( 
        <div>
            <h2>{this.state.message}</h2>
            <h3> My age is {this.state.age}</h3>
       <button onClick={()=> this.changeMessage()}>Subscribe</button>
        </div>
     )};
}
 
export default Customer ;