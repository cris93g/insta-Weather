import React, { Component } from "react";

import axios from "axios";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: []
		};
	}
	componentDidMount = () => {
		axios.get("/api/weather").then(response => {
			this.setState({ weather: Object.values(response.data) });
		});
	};
	render() {
		console.log(this.state.weather);
		let weatherDisplay = this.state.weather.map((elem, ind) => {
			return (
				<div>
					<p>{`today is going to be ${elem.Category}`}</p>
					{/* <p>{elem.Text}</p> */}
				</div>
			);
		});
		return <div className="Home">{weatherDisplay}</div>;
	}
}
