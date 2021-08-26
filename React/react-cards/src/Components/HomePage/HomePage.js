import React, { Component } from "react";

class HomePage extends Component {

    render() {

        let user = this.props.loggedUser;
        let userDetails = []
        this.props.items.forEach(function (item) { if (item.username === user) userDetails.push(item); });

        return (
            <div>
                <div>
                    <span>ID: {userDetails[0]['id']}</span> <br />
                    <span>Name: {userDetails[0]['name']}</span> <br />
                    <span>Phone No.: {userDetails[0]['phone']}</span> <br />
                    <span>E-mail: {userDetails[0]['email']}</span> <br />
                </div>

                <div>

                </div>
            </div>
        )
    }
}

export default HomePage;