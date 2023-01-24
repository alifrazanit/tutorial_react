import { useState } from 'react';
import { Card } from '../Card/Card';
import { ExpanseFilter } from '../ExpanseFilter/ExpanseFilter';
import { ExpanseItem } from '../ExpanseItem/ExpanseItem';
import classes from './Expanse.module.css';
export const Expanse = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onChangeFilter = selectedYear => {
        console.log(selectedYear)
        setFilteredYear(selectedYear);
    }


    return(
        <Card className={classes['expanse']}>
            <ExpanseFilter selected={filteredYear} onChangeFilter={onChangeFilter}/>
            <ExpanseItem  
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
        </Card>
    )
}