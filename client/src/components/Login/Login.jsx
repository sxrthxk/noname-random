import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
//import useFetch from "../../hooks/useFetch";
import { useState } from 'react';
import welcomeimg from "../../assets/login3.jpg";

function Login(){
    const[emailval,setemailval]= useState("");
    const[passval,setpassval]= useState("");

    const handlesubmit=(event)=>{
        event.preventDefault();
    }
    return(
        <div className='main-login'>
            <div className="login-contain">
                <div className="left-side">
                    <form onSubmit={handlesubmit}>
                        <label for="emil1">Email</label>
                            <input placeholder="Enter Your Email"type="email" value={emailval}
                            onChange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
                        <label for="pwd1">Password</label>
                            <input placeholder="Enter Password" type="password"
                            value={passval} onchange={(e)=>{setpassval(e.target.value)}}
                             id="pwd1"/>
                            <button type="submit" id="sub_butt">Login</button>
                    </form>

                    <div className="footer">
                        <h4>Don't have an Account ? <Link classname='link'to='/Register'> Register Now</Link></h4>
                    </div>
                </div>
                <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back..!</h3>
                    </div>
                     <div className='welcomeimg'>
                        <img src={welcomeimg} id='wel-img-id' alt="" srcSet=''/>
                        
                    </div>              
               </div>

            </div>
        </div>
    )
}

export default Login;
