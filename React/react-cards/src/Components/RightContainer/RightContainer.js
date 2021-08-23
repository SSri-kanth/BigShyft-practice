import React, { Component } from "react";
import './RightContainer.css'
import Login from "../Login/Login";
import SignUp from "../../SignUp";
import UserForm from "../UserForm/UserForm";

class RightContainer extends Component {


	SignUpPage = () => {

		return(
			<nav>
				<div>
					<h1>Sign Up</h1>
					<p>Please fill in this form to create an account.</p>
				</div>
				<div>
					<button onClick= {this.LoginPage}> Log In</button>
				</div>
				<div>
					<SignUp/>
				</div>
			</nav>
		)
	}

	LoginPage = () => {

		return (
			<nav>
				<div>
					<h1>Log In</h1>
					<p>Kindly fill details for login</p>
				</div>
				<div>
					<button onClick={() => this.signup}> Sign Up</button>
				</div>
				<div>
					<Login/>
				</div>
			</nav>
		)
	}


	render() {
		return (
			<div>
				{this.LoginPage}
			</div>
		)
	}
}

export default RightContainer;