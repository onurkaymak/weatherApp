import classes from './DetailedForecast.module.scss';

import SunIcon from '../img/icons/SunIcon';
import CloudIcon from '../img/icons/CloudIcon';
import RainIcon from '../img/icons/RainIcon';
import WindIcon from '../img/icons/WindIcon';
// import SnowIcon from '../img/icons/SnowIcon';

const DetailedForecast = () => {
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
                    <li className={classes.detailedForecast__weekly_list_item}>
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
                <button className={classes.detailedForecast__location_button}>Change Location</button>
            </div>
        </section>
    )
};

export default DetailedForecast;