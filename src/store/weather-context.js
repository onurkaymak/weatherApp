import React, { useState } from "react";

const WeatherContext = React.createContext({
    location: {},
    onLocationChange: () => { },
    error: false,
    errorInfo: {}

});

export const WeatherContextProvider = (props) => {

    const [location, setLocation] = useState({
        dayName: '--',
        fullDate: '--',
        location: '--',
        icon: '03d',
        temp: '--',
        weather: '--',
        feelslike: '--',
        humidity: '--',
        wind: '--',
        weatherId: '--'
    });

    const [error, setError] = useState(false);

    const [errorInfo, setErrorInfo] = useState(null);


    const locationHandler = async (props) => {
        try {
            const cordinateResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props},US&limit=4&appid=5b5d58b38c748938b6625c4571ed3c31`)
            const cordinateData = await cordinateResponse.json();
            const lat = cordinateData[0].lat;
            const lon = cordinateData[0].lon;
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b5d58b38c748938b6625c4571ed3c31&units=imperial`)
            const weatherData = await weatherResponse.json();
            const getDate = Date.now();
            const dayName = new Date(getDate).toLocaleDateString('en-US', { weekday: 'long' })
            const fullDate = new Date(getDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

            setLocation({
                dayName,
                fullDate,
                location: props.toString().toUpperCase(),
                icon: weatherData.weather[0].icon,
                temp: Math.round(weatherData.main.temp),
                weather: weatherData.weather[0].main,
                feelslike: Math.round(weatherData.main.feels_like),
                humidity: weatherData.main.humidity,
                wind: Math.round(weatherData.wind.speed),
                weatherId: weatherData.weather[0].id.toLocaleString()
            })
        }
        catch (err) {
            setError(true)
            setErrorInfo({ errorInfo: 'Something went wrong, please try again.' })
        }


    }


    return (
        <WeatherContext.Provider
            value={{
                location: location,
                onLocationChange: locationHandler,
                error: error,
                setError: setError,
                errorInfo: errorInfo,
                setErrorInfo: setErrorInfo
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;