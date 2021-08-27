import React, { Component } from "react";
import './RightContainer.css'
import RightHeader from "../RightHeader";
import UserForm from "../UserForm/UserForm";
import LoginForm from "../LoginForm"
import PropTypes from 'prop-types'
import HomePage from "../HomePage";
import {connect} from "react-redux";
import {loggedUserAction} from "../reducer/actions";


class RightContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: "login",
			loggedUser: "",
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
		this.setState({currentPage});
	}

	getLoggedUser = (loggedUser) => {
		this.props.loggedUserAction(loggedUser);
	}

	render() {
		const { currentPage } = this.state;
		return (
			<div>
				<RightHeader currentPage={currentPage} changePage={this.handleChangePage} />
				{currentPage === "login" && <LoginForm items={this.props.items} clickCard={this.props.clickCard} changePage={this.handleChangeScreen} getLoggedUser={this.getLoggedUser}/>}
				{currentPage === "signup" && <UserForm addUser={this.props.addUser} items={this.props.items}/>}
				{currentPage === "afterlogin" && <HomePage items={this.props.items} changePage={this.handleChangePage} loggedUser={this.props.loggedUser}/>}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	loggedUser: state.loggedUser
})

const mapDispatchToProps = {
	loggedUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RightContainer);

RightContainer.propTypes = {
	items: PropTypes.array,
	addUser: PropTypes.func,
	clickCard: PropTypes.string
}