import classes from './DetailedForecast.module.scss';

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
            <div className={classes.detailedForecast__weekly_container}></div>
            <div className={classes.detailedForecast__location_container}></div>
        </section>
    )
};

export default DetailedForecast;