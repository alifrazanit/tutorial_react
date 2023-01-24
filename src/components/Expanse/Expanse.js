import { useState } from 'react';
import { Card } from '../Card/Card';
import { ExpanseFilter } from '../ExpanseFilter/ExpanseFilter';
import { ExpanseItem } from '../ExpanseItem/ExpanseItem';
import classes from './Expanse.module.css';
export const Expanse = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpanses = props.items.filter((expanse) => {
        return new Date(expanse.date).getFullYear().toString() === filteredYear;
    })
    const onChangeFilter = selectedYear => {
        setFilteredYear(selectedYear);
    };
    let expensesContent = <p>Data Not Exist</p>;
    if(filteredExpanses.length > 0){
        expensesContent = filteredExpanses.map((item) => (
            <ExpanseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
        />
        ))
    }


    return (
        <Card className={classes['expanse']}>
            <ExpanseFilter selected={filteredYear} onChangeFilter={onChangeFilter} />
            {expensesContent}
        </Card>
    )
}