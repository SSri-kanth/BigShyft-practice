import React, { Component } from "react";
import './RightContainer.css'
import RightHeader from "../RightHeader";
import UserForm from "../UserForm/UserForm";
import LoginForm from "../LoginForm"
import PropTypes from 'prop-types'
import HomePage from "../HomePage";


class RightContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "login",
		};
	}

	handleChangePage = (currentPage) => {
		switch (currentPage) {
			case "login":
				this.setState({ currentPage: "signup" });
				break;
			case "signup":
				this.setState({ currentPage: "login" });
				break;
			case "afterlogin":
				this.setState({ currentPage: "login" });
				break;
			default:
		}
	}

	handleChangeScreen = (currentPage) => {
		this.setState({currentPage})
	}
	render() {
		const { currentPage } = this.state;
		return (
			<div>
				<RightHeader currentPage={currentPage} changePage={this.handleChangePage} />
				{currentPage === "login" && <LoginForm items={this.props.items} clickCard={this.props.clickCard} changePage={this.handleChangeScreen} />}
				{currentPage === "signup" && <UserForm addUser={this.props.addUser} />}
				{currentPage === "afterlogin" && <HomePage changePage={this.handleChangePage} />}
			</div>
		)
	}
}

export default RightContainer;

RightContainer.propTypes = {
	items: PropTypes.array,
	addUser: PropTypes.func,
	clickCard: PropTypes.string
}