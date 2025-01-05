import "./App.css";
import Weather from "./Weather.js";

function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Weather App</h1>
				<Weather defaultCity="Melbourne" />

				<footer>
					This project was coded by{" "}
					<a href="https://wesleyhoplarosportfolio.netlify.app" target="_blank">
						Wesley Hoplaros
					</a>{" "}
					and is open-sourced on{" "}
					<a
						href="https://github.com/whoplaros/react-weather-app-week5"
						target="_blank"
					>
						Github
					</a>{" "}
					and hosted on{" "}
					<a
						href="https://asyouwish-weather-react-app5.netlify.app"
						target="_blank"
					>
						Netlify
					</a>
					.
				</footer>
			</div>
		</div>
	);
}

export default App;
