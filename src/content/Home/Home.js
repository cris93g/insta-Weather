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
		let wea = this.state.weather.map((elem, ind) => {
			return (
				<div key={elem}>
					<p>{wea}</p>
				</div>
			);
		});
		return <div className="Home">{wea}</div>;
	}
}
