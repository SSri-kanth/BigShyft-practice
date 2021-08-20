import React, {Component} from 'react';
import './UserLists.css';
import UserCard from '../UserCard';


class UserList extends Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json,
			})
		});
	}

	render(){

		var{ isLoaded, items} = this.state;

		if(!isLoaded){
			return <div>Loading...</div>
		}
		else{
			return(
				<div className="user_list">
					{items.map(item => (
						<UserCard key={item.id} item={item}/>		
					))};
				</div>
			);	
		}
	}
}

export default UserList;
