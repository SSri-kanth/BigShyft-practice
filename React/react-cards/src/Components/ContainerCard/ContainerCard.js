import React from "react";
import './ContainerCard.css'
import LeftContainer from "../LeftContainer";
import RightContainer from "../RightContainer/RightContainer";

function ContainerCard(){
	return (
		<div>
			<div className="left">
				<LeftContainer />
			</div>
			<div className="right">
				<RightContainer/>
			</div>
		</div>
	)
}

export default ContainerCard;

