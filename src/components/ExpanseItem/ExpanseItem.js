import classes from './ExpanseItem.module.css';
export const ExpanseItem = props => {
    const ExDate = new Date(2023, 1, 24);
    const ExTitle = 'Car Asuransi';
    const ExAmount = 294.21;


    return(
        <div className={classes['expense-item']}>
            <div>{ExDate.toISOString()}</div>
            <div className={classes['expense-item__description']}>
                <h2>{ExTitle}</h2>
                <div className={classes['expense-item__price']}>${ExAmount}</div>
            </div>
        </div>
    )
}