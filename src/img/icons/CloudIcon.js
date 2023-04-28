import classes from './CloudIcon.module.scss';

import '../icons/SVG/sprite.svg'

const CloudIcon = () => {
    return (
        <svg
            xmlns=".../icons/sprite.svg#icon-cloud.svg"
            viewBox="0 0 32 32"
            className={classes.detailedForecast__weekly_icon}
        >
            <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7z"></path>
        </svg>
    )
}

export default CloudIcon;