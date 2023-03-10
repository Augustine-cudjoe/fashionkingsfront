
import React, {Component} from "react";

class Counter extends Component{
    /* state ={
        value:this.props.counter.value
     };
     
      handleIncreament=()=>{
        //console.log(product);
        this.setState({value:this.state.value+1});
      };
      */
 
    /*  doHandleIncrement=()=>{

        this.handleIncreament({id:1});
      }
      
      renderTags(){
        if (this.state.tags.length===0) return <p> There are not tag</p>;
        return <ul>
        {
            this.state.tags.map(tag=><li key={tag}>{tag} </li>)
        }
    </ul>
      }*/
       
       render (){
        
         return (
          /*<div>
            {this.state.tags.length===0 && "Please create a new tag!"}
           {this.renderTags()}
          </div> 
          */
         <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()} </span>;
            <button 
             onClick={()=> this.props.onIncrement(this.props.counter)}
             className="btn btn-secondary btn-sm"> Increment</button>
             <div  onClick={()=> this.props.onDelete(this.props.counter.id) }
              className="button btn btn-danger btn-sm m-2">Delete</div>

         </div>
      
       ); 
       
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
    }

    formatCount(){
        const {value }=this.props.counter;
        return value===0? "zero" :value;

    }
   

    
}
 
export default Counter;