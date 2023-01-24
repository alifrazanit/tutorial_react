import { useState } from 'react';
import { Card } from '../Card/Card';
import { ExpanseFilter } from '../Expanse/ExpanseFilter/ExpanseFilter';
import { ExpanseList } from '../Expanse/ExpanseList/ExpanseList';
import classes from './Expanse.module.css';
import { ExpanseChart } from './ExpanseChart/ExpanseChart';
export const Expanse = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpanses = props.items.filter((expanse) => {
        return new Date(expanse.date).getFullYear().toString() === filteredYear;
    })
    const onChangeFilter = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className={classes['expanse']}>
            <ExpanseFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            <ExpanseChart expenses={filteredExpanses}/>
            <ExpanseList items={filteredExpanses} />
        </Card>
    )
}