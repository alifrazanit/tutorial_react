import classes from './NewExpanse.module.css';
import { ExpanseForm } from '../ExpanseForm/ExpanseForm';
export const NewExpanse = props => {
    const onSaveExpanse = expanse => {
        props.onSave(expanse);
    }
    return (
        <div className={classes['new-expense']}>
            <ExpanseForm onSaveExpanseData={onSaveExpanse}/>
        </div>
    )
}