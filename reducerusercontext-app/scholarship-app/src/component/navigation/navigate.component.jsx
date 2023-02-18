import React, { Fragment } from 'react';
import { Link,Outlet } from 'react-router-dom';
import './navigate.styles.scss';

const NavComponent=()=>{

    return(

        <Fragment>       
        <div className='nav-container'>
           
                 <Link  className='nav-link' to={'home'}>Home</Link>
               <Link className='nav-link' to={'sign-up'}>Sign Up </Link>
                <Link className='nav-link' to={'sign-in'}> Sign in </Link>
                <Link className='nav-link' to={'contact'}>Contact</Link>
                <Link className='nav-link' to={'content'}>Content</Link>
          
        </div>
        <div className="page-content">
        <Outlet />
      </div>
        </Fragment>

    )
}
export default NavComponent
