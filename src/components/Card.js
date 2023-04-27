import classes from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={classes.card__container}>
            {props.children}
        </div>
    )
}

export default Card;