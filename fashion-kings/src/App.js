
import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './component/contact/contact.component';
import Authentication from './routes/Authentication/authentication.component';
import Shop from './routes/shop/shop.component';

 const App=()=>{
  return (
    <Routes>

        <Route path='/' element={<Navigation/>}>
           <Route index element={<Home/>} />
           <Route path="contact" element={<Contact/>} />
           <Route path="shop/*" element={<Shop/>} />
           <Route path="auth" element={<Authentication/>} />
        </Route>
          
    </Routes>
  );
}

export default App;
 