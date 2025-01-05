import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {
	let [loaded, setLoaded] = useState(false);
	let [forecast, setForecast] = useState(null);
	function handleResponse(response) {
		setForecast(response.data.daily);
		setLoaded(true);
	}

	if (loaded) {
		console.log(forecast);
		return (
			<div className="WeatherForecast">
				<div className="row">
					<div className="col">
						<WeatherForecastDay data={forecast[0]} />
					</div>
				</div>
			</div>
		);
	} else {
		let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
		let longitude = props.coordinates.longitude;
		let latitude = props.coordinates.latitude;
		let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
		return null;
	}
}
