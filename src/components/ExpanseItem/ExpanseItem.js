import classes from './ExpanseItem.module.css';
export const ExpanseItem = props => {
    return(
        <div className={classes['expense-item']}>
            <div>Maret, 20 2023</div>
            <div className={classes['expense-item__description']}>
                <h2>Car Asuransi</h2>
                <div className={classes['expense-item__price']}>$12</div>
            </div>
        </div>
    )
}