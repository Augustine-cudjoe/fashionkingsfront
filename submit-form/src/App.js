import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Registration from './conponent/registration-form.component';
import SignIn from './conponent/sign-in-form.component';

function App() {
  const [currentForm,setcurrentForm]=useState("signin");

  const toggleForm=(formName)=>{
    setcurrentForm(formName);

  }
  return (
    <div className="App">
      {
        currentForm==="signin" ? <SignIn onformSwitch={toggleForm}/> :<Registration/>
      }
      
    </div>
  );
}

export default App;
