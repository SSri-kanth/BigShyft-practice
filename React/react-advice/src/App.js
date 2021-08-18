import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';



function refresh() {
	window.location.reload();
}

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		}
	}

	componentDidMount(){
		fetch('https://api.adviceslip.com/advice')
		.then(res => res.json())
		.then(json => {
			this.setState({
				isLoaded: true,
				items: json.slip.advice,
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
				<div className="App">
					<p className="quoteStyle">{items}</p>
					<button onClick={refresh}>Get a new advice..</button>
				</div>
			);	
		}
	}
}

export default App;