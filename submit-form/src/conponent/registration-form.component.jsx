import React,{useState } from "react";
const Registration = (props) => {
    const [email,setEmail] =useState('');
    const [password, setPassword]=useState('');
    const [name , setName] =useState('');

    const handleSubmit=(e)=>{
        e.preserveDefault();
        console.log(email);
       // console.log(password);
    }
    

        
    
    return (
        <div className="with-form-container">
            <h2>Registration form</h2>
        <form className="registration-form" onSubmit= {handleSubmit} >
        <label htmlFor="name">full name</label>
        <input type="text" value={name} onChange={e=>setName(e.target.value)} id="name" placeholder="full name"></input><br/>
        <label htmlFor="email">Email</label>
        <input  value={email} onChange={(e=>setEmail(e.target.value))} type="email" placeholder="auguscudjoe94@gmail.com"  id="email" name="=email"/>
        <label htmlFor="password">Password</label>
        <br/>
        <input   value={password} onChange={(e=>setPassword(e.target.value))} type="password" placeholder="******"  id="password" name="password"/>
        <button  type="submit">Register Here </button>
    
    </form>
    <button  className="link-btn" onClick={()=> props.onformSwitch("signin")}> Already have an account ? Signin here </button>
    
    </div>
      );
}
 
export default Registration;