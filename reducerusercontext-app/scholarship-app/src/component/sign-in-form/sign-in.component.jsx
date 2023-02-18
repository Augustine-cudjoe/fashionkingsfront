import React, { useState } from 'react';
const SignInComponent = () => {
    const [details,setDetails]=useState({
        name:'',
        email:''
    })
    
    return ( 
        <div>
            <form>
            <h1>Sign in</h1>
           <p>Please fill in this form to create an account.</p>
           
            <label htmlFor='name'>full Name</label><br/>
                <input type='text' value={details.name} onChange={e=>setDetails({...details,name:e.target.value})} id='name' name='name'/><br/>
                <label htmlFor='email'>Email</label><br/>
                <input type='email' value={details.email} onChange={e=>setDetails({...details,email:e.target.value})} id='email' name='email'/><br/>
                <button type='submit' className='signin'>Submit</button>
            </form>
        </div>
     );
}
 
export default SignInComponent;