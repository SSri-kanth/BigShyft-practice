import React, {Component} from 'react';
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		this.getAdvice();
	}

	getAdvice = () => {
		fetch("https://api.adviceslip.com/advice")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					items: json.slip.advice,
				});
			});
	};

	refresh() {
		this.getAdvice();
	}

	render() {
		var { isLoaded, items } = this.state;

		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="App">
					<p className="quoteStyle">{items}​​​​​​​​</p>
					<button onClick={this.refresh.bind(this)}​​​​​​​​> Get a new advice..</button>
				</div>
			);
		}
	}
}

exportdefaultApp;

