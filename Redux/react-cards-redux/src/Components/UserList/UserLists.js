import React, {Component} from 'react';
import './UserLists.css';
import UserCard from '../UserCard';
import PropTypes from 'prop-types'

class UserList extends Component {
	render(){		
		if(!this.props.isLoaded){
			return <div>Loading...</div>
		}
		else{
			return(
				<div className="user_list">
					{this.props.items.map(item => (
						<UserCard key={item.id} item={item} cardClick = {this.props.card}/>		
					))}
				</div>
			)	
		}
	}
}


export default UserList;

UserList.propTypes = {
	isLoaded: PropTypes.bool,
	items: PropTypes.array,
	card: PropTypes.func
}
