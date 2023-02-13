import { Input } from "../../template/Input/Input"
import classes from './MealsItemForm.module.css';
import { useRef, useState } from "react";
export const MealsItemForm = props => {
    const inputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(false);
    const onSubmitHandler = e => {
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const  enteredAmountNum = +enteredAmount; 
        if(enteredAmount.trim().length === 0 ||
        enteredAmountNum < 1 || enteredAmountNum > 5){
            setAmountIsValid(false)
        }
        props.onAddToCart(enteredAmountNum)

    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input
                ref={inputRef}
                label="Amount"
                input={{
                    id: 'amount' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid number (1 - 5)</p>}
        </form>
    )
}