import { useContext, useState, useRef } from 'react';

import classes from './DetailedForecast.module.scss';

import WeatherContext from '../store/weather-context';

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
            ctx.setErrorInfo({ errorInfo: 'You must search for a city and state - E.g. Portland, OR' })
            return
        }
        ctx.onLocationChange(event.target[0].value);
        setIsForm(false);
    }

    return (
        <section className={classes.detailedForecast__container}>
            <div className={classes.detailedForecast__info_container}>
                <div className={classes.detailedForecast__info_feelslike}>
                    <span className={classes.detailedForecast__info_feelslike_title}>FEELS LIKE</span>
                    <span className={classes.detailedForecast__info_feelslike_value}>{ctx.location.feelslike} F</span>
                </div>
                <div className={classes.detailedForecast__info_humidity}>
                    <span className={classes.detailedForecast__info_humidity_title}>HUMIDITY</span>
                    <span className={classes.detailedForecast__info_humidity_value}>{ctx.location.humidity} %</span>
                </div>
                <div className={classes.detailedForecast__info_wind}>
                    <span className={classes.detailedForecast__info_wind_title}>WIND</span>
                    <span className={classes.detailedForecast__info_wind_value}>{ctx.location.wind} mph</span>
                </div>
            </div>
            <div className={classes.detailedForecast__weekly_container}>
                <ul className={classes.detailedForecast__weekly_list}>
                    <li className={classes.detailedForecast__weekly_list_item_active}>
                        <img className={classes.detailedForecast__weekly_list_item_icon}
                            src={`https://openweathermap.org/img/wn/${ctx.location.icon}@2x.png`} alt='weather'>
                        </img>
                        <span className={classes.detailedForecast__weekly_list_item_day}>{ctx.location.dayName}</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>{ctx.location.temp}</span>
                    </li>
                    <li className={classes.detailedForecast__weekly_list_item}>
                        <img className={classes.detailedForecast__weekly_list_item_icon}
                            src={'https://openweathermap.org/img/wn/10d@2x.png'} alt='weather'>
                        </img>
                        <span className={classes.detailedForecast__weekly_list_item_day}>Day</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>55</span>
                    </li>
                    <li className={classes.detailedForecast__weekly_list_item}>
                        <img className={classes.detailedForecast__weekly_list_item_icon}
                            src={'https://openweathermap.org/img/wn/03d@2x.png'} alt='weather'>
                        </img>
                        <span className={classes.detailedForecast__weekly_list_item_day}>Day</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>64</span>
                    </li>
                    <li className={classes.detailedForecast__weekly_list_item}>
                        <img className={classes.detailedForecast__weekly_list_item_icon}
                            src={'https://openweathermap.org/img/wn/09d@2x.png'} alt='weather'>
                        </img>
                        <span className={classes.detailedForecast__weekly_list_item_day}>Day</span>
                        <span className={classes.detailedForecast__weekly_list_item_temp}>61</span>
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
                                placeholder='Search for weather (City, State)'>
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