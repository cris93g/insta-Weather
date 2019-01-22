require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const app = express();
const port = process.env.port || 3001;
const weatherCtrl = require("./WeatherController/WeatherController");

app.use(cors());
app.use(json());

app.get("/api/weather", weatherCtrl.getWeather);

app.listen(port, () => {
	console.log(`weather app listening on port ${port}`);
});
