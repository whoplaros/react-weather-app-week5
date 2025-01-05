import React from "react";

export default function WeatherInfo() {
	return (
		<div className="WeatherInfo">
			<h1>{weatherData.city}</h1>
			<ul>
				<li>
					<FormattedDate date={weatherData.date} />
				</li>
				<li className="text-capitalize">{weatherData.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix">
						<img
							src={weatherData.iconUrl}
							alt={weatherData.description}
							className="float-start"
						/>
						<div className="float-start">
							<span className="temperature">
								{Math.round(weatherData.temperature)}
							</span>
							<span className="unit">°C</span>
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {weatherData.humidity}%</li>
						<li>Wind: {weatherData.wind} km/hr</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
