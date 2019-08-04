import actionTypes from './actionTypes';

export const getWeather = (zip) => ({
	type: actionTypes.GET_WEATHER,
	zip
});

export const getWeatherSucceeded = (data) => ({
	type: actionTypes.GET_WEATHER_SUCCEEDED,
	data
});

export const getWeatherFailed = (err) => ({
	type: actionTypes.GET_WEATHER_FAILED,
	err
});

