import React from 'react';
import axios from 'axios';

const Home = () => {
	const [weatherData, setWeatherData] = React.useState();

	React.useEffect(() => {
		axios
			.get(
				'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=' +
					process.env.OPEN_WEATHER_API_KEY
			)
			.then((response) => {
				setWeatherData(response.data);
				console.log(response.data);
			});
	}, []);

	return (
		<div className='flex h-screen w-screen justify-center items-center'>
			<div className='flex'>{JSON.stringify(weatherData)}</div>
		</div>
	);
};

export default Home;

