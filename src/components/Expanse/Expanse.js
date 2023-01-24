import { ExpanseItem } from '../ExpanseItem/ExpanseItem';
import classes from './Expanse.module.css';
export const Expanse = props => {
    return(
        <div className={classes['expanse']}>
            <ExpanseItem  
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
        </div>
    )
}