import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';
//import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
//import ReducerCounter from './usereducer/reducercounter';
//import ReducerCounterTwo from './usereducer/rerucercounterobj';
//import ReducerCounterMult from './usereducer/reducercountermult';
import AppComponent from './reducer-context/App-component';


  //ReactDOM.render(<Counter/>,document.getElementById("root"));
  //registerServiceWorker();
  const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
    <React.StrictMode>
      <AppComponent/>
    </React.StrictMode>
   );
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
