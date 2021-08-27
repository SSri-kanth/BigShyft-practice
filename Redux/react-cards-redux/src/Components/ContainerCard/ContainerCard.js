import React, { Component } from "react";
import './ContainerCard.css'
import LeftContainer from "../LeftContainer";
import RightContainer from "../RightContainer/RightContainer";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchUsers } from "../reducer/actions";
import { addUserToList } from "../reducer/actions";

class ContainerCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clickCard: "",
		}
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	addUser = (newUser) => {
		this.props.addUserToList(newUser);
	}

	cardClick = (item) => {
		console.log(item.username);
		this.setState({ clickCard: item.username })
	}

	render() {
		var { clickCard } = this.state;
		return (
			<div>
				<div>
					<LeftContainer isLoaded={this.props.isLoaded} items={this.props.items} addUser={this.addUser} cardClick={this.cardClick} />
				</div>
				<div>
					<RightContainer items={this.props.items} addUser={this.addUser} clickCard={clickCard} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	items: state.userList,
	isLoaded: state.isLoaded
})

const mapDispatchToProps = {
	fetchUsers,
	addUserToList
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCard);

ContainerCard.propTypes = {
	fetchUsers: PropTypes.func,
	isLoaded: PropTypes.bool
}