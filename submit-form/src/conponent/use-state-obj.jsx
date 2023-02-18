import React ,{useState} from 'react';

const HookCounter = () => {
    const [name,setName] =useState({firstName:'', lastName:'',middleName:''})

    const middleNameHandler=(e)=>{
      setName({...name,middleName:e.target.value})
    }
    
    return (
        <form> 
        <label htmlFor='text'>first Name</label>
    <input 
     type='text'
     value={name.firstName} 
     onChange={e => setName({...name, firstName: e.target.value})}/><br/>
     <label htmlFor='text'>last name</label>
     <input
      type='text'
     value={name.lastName} 
      onChange={e=>setName({...name, lastName: e.target.value})}/><br/>
      <label htmlFor='text'>last name</label>
      <input type='text' value={name.middleName} onChange={middleNameHandler}></input>
    <h2>Your first name is -{name.firstName}</h2>
    <h2> your last name is -{name.lastName}</h2>
    <h3>yourlast name is {name.middleName}</h3>
    <h2> {JSON.stringify(name)}</h2>
    </form>

       
      );
}
 
export default HookCounter;

