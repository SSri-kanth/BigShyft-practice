import React from "react";

function UserForm() {

    return (
        <div>
            <form id="user_form" >
                <label>
                    Enter your ID:
                    <input type="text" name="id" />
                </label>
                <br />
                <label>
                    Enter your Name:
                    <input type="text" name="Name" />
                </label>
                <br />
                <label>
                    Enter your User Name:
                    <input type="text" name="UserName" />
                </label>
                <br />
                <label>
                    Enter your E-Mail ID:
                    <input type="text" name="eMail" />
                </label>
                <br />
                <label>
                    Enter your Website:
                    <input type="text" name="Website" />
                </label>
                <br />
                <label>
                    Enter your Phone number:
                    <input type="text" name="Phone" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;