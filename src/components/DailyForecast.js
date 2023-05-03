import classes from './DailyForecast.module.scss';

import { useContext, useState, useEffect } from 'react';

import WeatherContext from '../store/weather-context';

import clear from "../img/videos/clear.mp4";
import cloudy from "../img/videos/cloudy.mp4";
import drizzle from "../img/videos/drizzle.mp4";
import snowy from "../img/videos/snowy.mp4";
import rain from "../img/videos/rain.mp4";
import thunderstorm from "../img/videos/thunderstorm.mp4";
import severe from "../img/videos/severe.mp4";

import locationImg from '../img/location.png';


const DailyForecast = () => {
    const ctx = useContext(WeatherContext);

    const [bgVideo, setBgVideo] = useState();

    useEffect(() => {
        const id = ctx.location.weatherId;
        switch (id.startsWith('')) {
            case id.startsWith('2'):
                setBgVideo(thunderstorm)
                break;
            case id.startsWith('3'):
                setBgVideo(drizzle)
                break;
            case id.startsWith('5'):
                setBgVideo(rain)
                break;
            case id.startsWith('6'):
                setBgVideo(snowy)
                break;
            case id.startsWith('7'):
                setBgVideo(severe)
                break;
            case id.startsWith('800'):
                setBgVideo(clear)
                break;
            case id.startsWith('8'):
                setBgVideo(cloudy)
                break;
            default:
                setBgVideo()
        }
    }, [ctx.location])


    return (
        <section className={classes.dailyForecast__container}>
            <div className={classes.dailyForecast__bg_container}>
                <video className={classes.dailyForecast__bg_video} src={bgVideo} type="video/mp4" autoPlay loop muted></video>
            </div>
            <div className={classes.dailyForecast__info_top}>
                <p className={classes.dailyForecast__info_top_dayname}>{ctx.location.dayName}</p>
                <h3 className={classes.dailyForecast__info_top_date}>{ctx.location.fullDate}</h3>
                <div className={classes.dailyForecast__info_top_locationContainer}>
                    <img className={classes.dailyForecast__info_top_icon} src={locationImg} alt='location' />
                    <h4 className={classes.dailyForecast__info_top_location}>{ctx.location.location}</h4>
                </div>
            </div>
            <div className={classes.dailyForecast__info_bottom}>
                <img className={classes.dailyForecast__info_bottom_icon}
                    src={`https://openweathermap.org/img/wn/${ctx.location.icon}@2x.png`} alt='weather'>
                </img>
                <h1 className={classes.dailyForecast__info_bottom_temp}>{ctx.location.temp}</h1>
                <h3 className={classes.dailyForecast__info_bottom_desc}>{ctx.location.weather}</h3>
            </div>
        </section>
    )
}

export default DailyForecast;