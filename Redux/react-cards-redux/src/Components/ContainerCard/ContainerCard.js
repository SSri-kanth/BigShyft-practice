import React, { Component } from "react";
import './ContainerCard.css'
import LeftContainer from "../LeftContainer";
import RightContainer from "../RightContainer/RightContainer";
import { connect } from 'react-redux';


class ContainerCard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			clickCard: "",
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
				})
			});
	}

	addUser = (newUser) => {
		var list = this.state.items;
		list.unshift(newUser);
		this.setState({ items: list });
	}

	cardClick = (item) => {
		console.log(item.username);
		this.setState({ clickCard: item.username })
	}

	render() {
		var { isLoaded, items, clickCard } = this.state;
		return (
			<div>
				<div>
					<LeftContainer isLoaded={isLoaded} items={items} addUser={this.addUser} cardClick={this.cardClick} />
				</div>
				<div>
					<RightContainer items={items} addUser={this.addUser} clickCard={clickCard} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch =>{
    return{
        //: (user) => dispatch(loggedUser(user))
    }
}

export default ContainerCard;

