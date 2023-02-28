import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
function Register() {

    return(
        <div className="register">
            <img className="login-logo" src="data:image/png;base64,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" />
            

        <div className="login-container">
            <h1>Create New Account</h1>
            <form>
                <h5>First Name</h5>
                <input type="text"/>
                <h5>Last Name</h5>
                <input type="text"/>
                <h5>E-mail</h5>
                <input type="text" />
                <h5>Password</h5>
                <input type="password" />
                <h5>Confirm Password</h5>
                <input type="password"/>
                <button className="register-button" type="subtmit">Create Your Account</button>
            </form>
            <p>
               
            </p>

            <h5>Already Have Account ?</h5>
            <Link to="/login">
            <button className="signin-button">Sign In</button>
            </Link>
        </div>
        </div>
    )
}
export default Register;