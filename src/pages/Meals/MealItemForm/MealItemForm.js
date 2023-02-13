import { Input } from '../../../template/Input/Input';
import classes from './MealItemForm.module.css';
export const MealItemForm = props => {
    return(
        <form className={classes.form}>
            <Input 
            label='Amount'
            input={{
                id:'amount_' + props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue: '1'
            }}
            />
            <button>+ add</button>
        </form>
    )
}