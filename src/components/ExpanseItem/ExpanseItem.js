import classes from './ExpanseItem.module.css';
export const ExpanseItem = props => {

    return(
        <div className={classes['expense-item']}>
            <div>{props.date.toISOString()}</div>
            <div className={classes['expense-item__description']}>
                <h2>{props.title}</h2>
                <div className={classes['expense-item__price']}>${props.amount}</div>
            </div>
        </div>
    )
}