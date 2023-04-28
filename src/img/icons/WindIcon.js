import classes from './WindIcon.module.scss';

import '../icons/SVG/sprite.svg'

const WindIcon = () => {
    return (
        <svg
            xmlns=".../icons/sprite.svg#icon-wind.svg"
            viewBox="0 0 32 32"
            className={classes.detailedForecast__weekly_icon}
        >
            <path d="M26.938 12c-1.656 0-3 1.344-3 3 0 0.353 0.073 0.685 0.184 1h-19.184c-0.552 0-1 0.448-1 1s0.448 1 1 1h22c1.656 0 3-1.344 3-3s-1.344-3-3-3zM4.938 14h12c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3c0 0.353 0.073 0.685 0.184 1h-9.184c-0.552 0-1 0.448-1 1s0.448 1 1 1zM20.938 20c-0.059 0-0.115 0.013-0.174 0.018-0.039-0.003-0.072-0.018-0.111-0.018h-15.428c-0.711 0-1.287 0.448-1.287 1s0.576 1 1.287 1h12.897c-0.111 0.315-0.184 0.648-0.184 1 0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3z"></path>
        </svg>
    )
}

export default WindIcon;