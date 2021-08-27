import React, { Component } from "react";

class HomePage extends Component {

    render() {

        let user = this.props.loggedUser;

        return (
            <div>
                <div>
                    <span>ID: {user['id']}</span> <br />
                    <span>Name: {user['name']}</span> <br />
                    <span>Phone No.: {user['phone']}</span> <br />
                    <span>E-mail: {user['email']}</span> <br />
                </div>

                <div>

                </div>
            </div>
        )
    }
}

export default HomePage;
