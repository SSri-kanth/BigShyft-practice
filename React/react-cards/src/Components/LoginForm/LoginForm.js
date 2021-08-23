import React from "react";

function LoginForm() {

    return (
        <div>
            <form id="login_form" >
                <label>
                    Enter Username
                    <input type="text" name="id" placeholder="Enter Username" />
                </label>
                <br />
                <label>
                    Password
                    <input type="text" name="Name" placeholder="Enter Password" />
                </label>
                <br />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LoginForm;