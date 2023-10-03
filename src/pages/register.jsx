import React, { useState } from "react";
import "../assets/register.css";
import {Link} from 'react-router-dom'
import axios from "axios";


function Register(){

    const [values, setValues] = useState({
        name: '', 
        email: '', 
        password:''
    })
   /* const[errors, setErrors]= useState({
    
    })*/
    const handleChange=(e)=>{
        setValues({...values,[e.target.name]: e.target.value });
    }

     // const navigate = navigate();
    const handleSubmition = (event) =>{
        //need to fix
        event.preventDefault();
        axios.post("http://localhost:3000/register", values)
        // .then(res => console.log(res))
        // // .catch(err => console.log(err)); 
        // .then(err => console.log(err)); 
        .then(res => console.log(res))
        .catch(error => {
            // if (error.response) {
            // // The request was made, but the server responded with an error
            // console.error("Server Error Data:", error.response.data);
            // console.error("Server Error Status:", error.response.status);
            // console.error("Server Error Headers:", error.response.headers);
            // } else 
            if (error.request) {
            // The request was made, but no response was received
            console.error("No response received from the server.");
            } else {
            // Something happened in setting up the request
            console.error("Request setup error:", error.message);
            }
        });
    }
    return(
        <div className="form-container">
            <div className="form-box">
                <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
                    <div className="bg-white p-3 rounded w-25">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmition}>
                            <div className="mb-3">
                                <label htmlFor="name"><strong>Name</strong></label>
                                <input type="text" placeholder="Enter your name" name="name" 
                                onChange={e => setValues({...values, name: e.target.value})}
                                className="form-control rounded-0" />
                            </div>
                                
                            <div className="mb-3">
                                <label htmlFor="email"><strong>Email</strong></label>
                                <input type="email" placeholder="Enter your email" name="email" 
                                onChange={e => setValues({...values, email: e.target.value})}
                                className="form-control rounded-0" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password"><strong>Password</strong></label>
                                <input type="password" placeholder="Enter your password" name="password" 
                                onChange={e => setValues({...values, password: e.target.value})}
                                className="form-control rounded-0" />
                            </div>

                            <button type="submit" className="btn btn-success w-100 rounded-0" >Sign Up</button>
                            <p>You are agreeing to our terms and policies</p>
                            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >Log In</Link>

                        </form>

                    </div>

                </div>
            </div> {/* end form box */}
        </div> //form container end div
        
    )
}
export default Register 
