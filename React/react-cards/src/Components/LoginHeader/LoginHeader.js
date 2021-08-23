import React from "react";
import SignUp from "../../SignUp";

function changeForm(){
    return <SignUp/>
}

function LoginHeader(){
    return (
        <nav>
            <div>
                <h1>Log In</h1>
                <p>Kindly fill details for login</p>
            </div>    
            <div>
                <button onClick={changeForm}> Sign Up</button>
            </div>
        </nav>

    )
}

export default LoginHeader;