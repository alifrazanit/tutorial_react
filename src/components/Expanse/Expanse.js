import { useState } from 'react';
import { Card } from '../Card/Card';
import { ExpanseFilter } from '../ExpanseFilter/ExpanseFilter';
import { ExpanseItem } from '../ExpanseItem/ExpanseItem';
import classes from './Expanse.module.css';
export const Expanse = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onChangeFilter = selectedYear => {
        setFilteredYear(selectedYear);
    }


    return (
        <Card className={classes['expanse']}>
            <ExpanseFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            {props.items.map(item => (
                <ExpanseItem
                key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}

        </Card>
    )
}