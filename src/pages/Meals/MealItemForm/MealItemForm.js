import { Input } from '../../../template/Input/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';
export const MealItemForm = props => {
    const inputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNum = +enteredAmount;
       
        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false)
        }
        props.onAddtoCart(enteredAmountNum)
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ add</button>
            {!amountIsValid && <p>Please Enter a valid Amount (1-5)</p>}
        </form>
    )
}