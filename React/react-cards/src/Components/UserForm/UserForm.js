import React from "react";

function UserForm(props){

    const handleSubmit = (e) =>{
        e.preventDefault();
        let newUser = {id: e.target[0].value, name: e.target[1].value, username: e.target[2].value, email: e.target[3].value, website: e.target[4].value, phone: e.target[5].value};
        props.addUser(newUser);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your ID:
                    <input type="text" name="id" placeholder="Enter ID" required/>
                </label>
                <br />
                <label>
                    Enter your Name:
                    <input type="text" name="Name" placeholder="Enter Name" required/>
                </label>
                <br />
                <label>
                    Enter your User Name:
                    <input type="text" name="UserName" placeholder="Enter Username" required/>
                </label>
                <br />
                <label>
                    Enter your E-Mail ID:
                    <input type="text" name="eMail" placeholder="Enter Email" required/>
                </label>
                <br />
                <label>
                    Enter your Website:
                    <input type="text" name="Website" placeholder="Enter Website" required/>
                </label>
                <br />
                <label>
                    Enter your Phone number:
                    <input type="text" name="Phone" placeholder="Enter Phone No." required/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default UserForm;