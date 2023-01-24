import classes from './ExpanseItem.module.css';
import { ExpanseDate } from '../ExpanseDate/ExpanseDate';
import { Card } from '../Card/Card';
export const ExpanseItem = props => {

    return(
        <Card className={classes['expense-item']}>
            <ExpanseDate date={props.date}/>
            <div className={classes['expense-item__description']}>
                <h2>{props.title}</h2>
                <div className={classes['expense-item__price']}>${props.amount}</div>
            </div>
        </Card>
    )
}