require("dotenv").config();
const axios = require("axios");

let mesquite = process.env.apiKey;

axios
	.get(
		`http://dataservice.accuweather.com/forecasts/v1/daily/1day/335731?${mesquite}`
	)
	.then(response => {
		weather = response.data;
		console.log(weather);
		return weather;
	});

let getWeather = (req, res) => {
	res.status(200).send(weather);
	console.log(weather);
};
//exporting the functions
module.exports = {
	getWeather
};
