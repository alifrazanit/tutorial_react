import classes from './Input.module.css';
export const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={classes.input.id}>{props.label}</label>
            <input { ...props.input} />
        </div>
    )
}