import classes from './RainIcon.module.scss';

import '../icons/SVG/sprite.svg'

const RainIcon = () => {
    return (
        <svg
            xmlns=".../icons/sprite.svg#icon-rainy.svg"
            viewBox="0 0 32 32"
            className={classes.detailedForecast__weekly_icon}
        >
            <linearGradient
                id="linear-gradient"
                gradientUnits="userSpaceOnUse"
                x1="1041.6901"
                y1="169.485"
                x2="1383.9301"
                y2="169.485"
                gradientTransform="matrix(1 0 0 -1 -761.14 398.97)"
            >
                <stop offset="14%" stopColor="#ffffff" stopOpacity="0%" />
                <stop offset="43%" stopColor="#337082" stopOpacity="41%" />
                <stop offset="67%" stopColor="#ffffff" stopOpacity="73%" />
                <stop offset="79%" stopColor="#37b1cf" stopOpacity="85%" />
            </linearGradient>
            <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"></path>
        </svg>
    )
}

export default RainIcon;