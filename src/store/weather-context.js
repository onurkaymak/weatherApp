import React, { useState } from "react";

const WeatherContext = React.createContext({
    location: null,
    onLocationChange: () => { },
    error: false,
    errorInfo: null

});

export const WeatherContextProvider = (props) => {

    const [location, setLocation] = useState(null);

    const [error, setError] = useState(false);

    const [errorInfo, setErrorInfo] = useState(null);


    const locationHandler = async () => {
        console.log('here')
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