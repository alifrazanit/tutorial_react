import classes from './NewExpanse.module.css';
import { ExpanseForm } from '../ExpanseForm/ExpanseForm';
export const NewExpanse = props => {
    return (
        <div className={classes['new-expense']}>
            <ExpanseForm />
        </div>
    )
}