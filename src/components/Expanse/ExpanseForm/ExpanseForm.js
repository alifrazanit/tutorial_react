import classes from './ExpanseForm.module.css';
import { useState } from 'react';
export const ExpanseForm = props => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [dateVal, setDate] = useState('')

    const onChangeTitleHandler = e => {
        setTitle(e.target.value);
    }
    const onChangeAmountHandler = e => {
        setAmount(e.target.value);
    }
    const onChangeDateHandler = e => {
        setDate(e.target.value);
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        const expanseData = {
            id: Math.random().toString(),
            title,
            amount,
            date: new Date(dateVal),
        };
        setTitle('')
        setAmount('')
        setDate('')
        props.onSaveExpanseData(expanseData);
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className={classes['new-expense__controls']}>
                <div className={classes['new-expense__control']}>
                    <label>Title</label>
                    <input type='text' onChange={onChangeTitleHandler} value={title}/>
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Amount</label>
                    <input type='number' onChange={onChangeAmountHandler} min='0.01' step='0.01' value={amount}/>
                </div>
                <div className={classes['new-expense__control']}>
                    <label>Date</label>
                    <input type='date' onChange={onChangeDateHandler} min='2020-01-01' max='2023-01-24' value={dateVal}/>
                </div>
            </div>
            <div className={classes['new-expense__actions']}>
                <button type='submit'>Add Expanse</button>
            </div>
        </form>
    )
}