import classes from './ExpanseList.module.css';
import { ExpanseItem } from '../ExpanseItem/ExpanseItem';

export const ExpanseList = props => {
    if (props.items.length === 0) {
        return <h2 className={classes['expenses-list__fallback']}>No Expanse Found.</h2>
    }
    return (
        <ul className={classes['expenses-list']}>
            {props.items.map((item) => (
                <ExpanseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </ul>
    )
}