import { useState } from 'react';
import classes from './ExpanseItem.module.css';
import { ExpanseDate } from '../ExpanseDate/ExpanseDate';
import { Card } from '../Card/Card';
export const ExpanseItem = props => {
    const [title, setTitle]=useState(props.title);
    const onChangeTitleHandler = e => {
        setTitle('Updated')
    }

    return(
        <Card className={classes['expense-item']}>
            <ExpanseDate date={props.date}/>
            <div className={classes['expense-item__description']}>
                <h2>{title}</h2>
                <div className={classes['expense-item__price']}>${props.amount}</div>
            </div>
            <button onClick={onChangeTitleHandler}>Change title</button>
        </Card>
    )
}