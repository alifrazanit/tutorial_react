import classes from './ExpanseForm.module.css';
export const ExpanseForm = props => {
    return (
        <form>
            <div className={classes['new-expense__controls']}>
                <div className={classes['new-expense__control']}>
                    <label>Title</label>
                    <input type='text' />
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' />
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Date</label>
                    <input type='date' min='2020-01-01' max='2023-01-24' />
                </div>
            </div>
            <div className={classes['new-expense__actions']}>
                <button type='submit'>Add Expanse</button>
            </div>
        </form>
    )
}