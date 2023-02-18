import React,{useState } from "react";
const SignIn = (props) => {
    const [email,setEmail] =useState('');
    const [password, setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preserveDefault();
        console.log(email);
       // console.log(password);
    }
    return ( 
        <div className="with-form-container">
             <h2>Signin form</h2>
            <form className="sign-in-form" onSubmit= {handleSubmit}>
            <label htmlFor="email">Email</label> 
            <input  value={email} onChange={(e=>setEmail(e.target.value))} type="email" placeholder="auguscudjoe94@gmail.com"  id="email" name="=email"/>
            <br/>
            <label htmlFor="password">Password</label>
            <input   value={password} onChange={(e=>setPassword(e.target.value))} type="password" placeholder="******"  id="password" name="password"/><br/>
             <button type="submit">Sign in </button>
            
             </form><br/>
         <button  className="link-btn" onClick={()=> props.onformSwitch("register")}> Don't have an account ? Register here </button>
       </div>
           
     );
}
 
export default SignIn;