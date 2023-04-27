import classes from './DailyForecast.module.scss';

import video from "../img/videos/windy.mp4";

import sunnyImg from '../img/forecastImg/sun.png';
import locationImg from '../img/forecastImg/location.png';





const DailyForecast = () => {
    return (
        <section className={classes.dailyForecast__container}>
            <div className={classes.dailyForecast__bg_container}>
                <video className={classes.dailyForecast__bg} autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className={classes.dailyForecast__info_top}>
                <p className={classes.dailyForecast__info_top_dayname}>Wednesday</p>
                <h3 className={classes.dailyForecast__info_top_date}>Apr 26 2023</h3>
                <div className={classes.dailyForecast__info_top_locationContainer}>
                    <img className={classes.dailyForecast__info_top_icon} src={locationImg} alt='location' />
                    <h4 className={classes.dailyForecast__info_top_location}>Portland, OR</h4>
                </div>
            </div>
            <div className={classes.dailyForecast__info_bottom}>
                <img className={classes.dailyForecast__info_bottom_icon} src={sunnyImg} alt='weather'></img>
                <h1 className={classes.dailyForecast__info_bottom_temp}>79F</h1>
                <h3 className={classes.dailyForecast__info_bottom_desc}>Sunny</h3>
            </div>
        </section>
    )
}

export default DailyForecast;