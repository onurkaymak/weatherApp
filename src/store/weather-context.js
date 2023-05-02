import React, { useState } from "react";

const WeatherContext = React.createContext({
    location: null,
    onLocationChange: () => { }

});

export const WeatherContextProvider = (props) => {

    const [location, setLocation] = useState(null);

    const locationHandler = async () => {
        console.log('here')
    }



    return (
        <WeatherContext.Provider
            value={{
                location: location,
                onLocationChange: locationHandler
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;