//import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import SignOutComponent from './component/sign-up-form/sign-up.componet';
import SignInComponent from './component/sign-in-form/sign-in.component';
import NavComponent from './component/navigation/navigate.component';
import Home from './component/home/home.component';
import ContactComponent from './component/contact/contact.component';
import ContentComponent from './component/content/content.component';




const App=()=> {

  return (
       <Routes className='App-link'> 
       
      
        <Route  exact path='/' element={<NavComponent/>} >
            <Route  path='home' element={<Home/>} />
            <Route   path='sign-up' element={<SignOutComponent/>} />
             <Route  path='sign-in' element={<SignInComponent/>} />
             <Route  path='contact' element={<ContactComponent />} />
            <Route  path='content' element={<ContentComponent />} />

            </Route>
        </Routes>
     
  
    
  
   /* <div>
    <ContentComponent/>
    <ContactComponent/>
    <SignInComponent/>
    <SignOutComponent/>
    <NavComponent/>
  </div>*/
  
  
  );
}

export default App;
