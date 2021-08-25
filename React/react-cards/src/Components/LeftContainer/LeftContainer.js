import React from "react";
import Header from "../Header";
import UserLists from "../UserList"


const LeftContainer = (props) => {
	var{ isLoaded, items, addUser, cardClick} = props;
	
	return(
		<div>
		<Header addUser = {addUser}/>
		<UserLists isLoaded = {isLoaded} items = {items} card = {cardClick}/>
		</div>
	)
}


export default LeftContainer;

