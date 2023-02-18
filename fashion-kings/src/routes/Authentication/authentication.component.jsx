import SignInForm from "../../component/sign-in-form/sign-in-form.component";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";
import React,{useContext } from "react";
import { CustomerContext } from "../../context/customer.context";

const Authentication =()=>{
    const {currentCustomer }=useContext(CustomerContext);
     
    return(
        <div className="authentication-container">
            {
                currentCustomer ? <h2> You are logged in as {currentCustomer.email}</h2>:
                <>
                 <SignInForm/>
                 <SignUpForm/>
                </>
               
            }

        </div>
    )

}
export default Authentication;