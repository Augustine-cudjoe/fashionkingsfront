import React, { useState } from 'react';

const SignOutComponent = () => {
    const [profile,setProfile]=useState({
        name:'',
        email:'',
        password:'',
        confirm:''
    })
    return (  
        <div>
           <form>
            <p> Fill the sign up forms </p>
            <label htmlFor='name'>Full Name</label><br/>
            <input type='text' value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})} id='name' name='name' /><br/>
            <label htmlFor='email'>Email</label><br/>
            <input type='email'value={profile.email} onChange={e=>setProfile({...profile,email:e.target.value})} id='email' name='email' /><br/>
            <label htmlFor='password'>Enter your password</label><br/>
            <input type='password' value={profile.password} onChange={e=>setProfile({...profile,password:e.target.value})} id='password' name='password' /><br/>
           <label htmlFor='confirm'>Enter your password</label><br/>
           <input type='password' value={profile.confirm} onChange={e=>setProfile({...profile,confirm:e.target.value})} id='confirm' name='confirm' /><br/>
           <button type='submit' className='signup'>Submit</button>
           </form>
        </div>
    );
}
 
export default SignOutComponent;