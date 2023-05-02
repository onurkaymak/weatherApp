import { useContext, useState, useRef } from 'react';

import classes from './DetailedForecast.module.scss';

import WeatherContext from '../store/weather-context';

import SunIcon from '../img/icons/SunIcon';
import CloudIcon from '../img/icons/CloudIcon';
import RainIcon from '../img/icons/RainIcon';
import WindIcon from '../img/icons/WindIcon';
// import SnowIcon from '../img/icons/SnowIcon';

import locationImg from '../img/forecastImg/location.png';


const DetailedForecast = () => {

    const ctx = useContext(WeatherContext);

    const [isForm, setIsForm] = useState(false);

    const inputRef = useRef();

    const buttonHandler = () => {
        setIsForm(prevState => !prevState);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (inputRef.current.value === '') {
            ctx.setError(true)
            ctx.setErrorInfo({ errorInfo: 'You must search for a city and state - E.g. (Portland, OR)' })
            return
        }

        ctx.onLocationChange();
    }

    return (
        <section className={classes.detailedForecast__container}>
            <div className={classes.detailedForecast__info_container}>
                <div className={classes.detailedForecast__info_precipitation}>
                    <span className={classes.detailedForecast__info_precipitation_title}>PRECIPITATION</span>
                    <span className={classes.detailedForecast__info_precipitation_value}>0 %</span>
                </div>
                <div className={classes.detailedForecast__info_humidity}>
                    <span className={classes.detailedForecast__info_humidity_title}>HUMIDITY</span>
                    <span className={classes.detailedForecast__info_humidity_value}>34 %</span>
                </div>
                <div className={classes.detailedForecast__info_wind}>
                    <span className={classes.detailedForecast__info_wind_title}>WIND</span>
                    <span className={classes.detailedForecast__info_wind_value}>8 mph</span>
                </div>
            </div>
            <div className={classes.detailedForecast__weekly_container}>
                <ul className={classes.detailedForecast__weekly_list}>
                    <li className={classes.detailedForecast__weekly_list_item_active}>
                        <SunIcon />
                        <span className={classes.detailedForecast__weekly_list_item_day}>Tue</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>79F</span>
                    </li>
                    <li className={classes.detailedForecast__weekly_list_item}>
                        <CloudIcon />
                        <span className={classes.detailedForecast__weekly_list_item_day}>Wed</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>63F</span>
                    </li>
                    <li className={classes.detailedForecast__weekly_list_item}>
                        <RainIcon />
                        <span className={classes.detailedForecast__weekly_list_item_day}>Thur</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>65F</span>
                    </li>
                    <li className={classes.detailedForecast__weekly_list_item}>
                        <WindIcon />
                        <span className={classes.detailedForecast__weekly_list_item_day}>Fri</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>71F</span>
                    </li>
                </ul>
            </div>
            <div className={classes.detailedForecast__location_container}>
                {!isForm && (
                    <button className={classes.detailedForecast__location_button} onClick={buttonHandler}>
                        <img className={classes.detailedForecast__location_button_icon} src={locationImg} alt='weather'></img>
                        Change Location
                    </button>
                )}
                {isForm && (
                    <div className={classes.detailedForecast__location__formContainer}>
                        <form className={classes.detailedForecast__location__form} onSubmit={formSubmitHandler}>
                            <input
                                autoFocus
                                onBlur={() => { setTimeout(buttonHandler, 200) }}
                                ref={inputRef}
                                type="text"
                                className={classes.detailedForecast__location__form_input}
                                placeholder='Search for weather'>
                            </input>
                            <button className={classes.detailedForecast__location__form_button} type="submit">Okay</button>
                        </form>
                    </div>
                )}
            </div>
        </section>
    )
};

export default DetailedForecast;