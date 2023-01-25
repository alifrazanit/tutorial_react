import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import classes from './add-user.module.css';
import { useState } from 'react';
export const AddUser = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const AddUserHandler = event => {
        event.preventDefault();
        console.log(username, age)
    }
    const onChangeUsernameHandler = e => {
        setUsername(e.target.value);
    }
    const onChangeAgeHandler = e => {
        setAge(e.target.value);
    }
    return (
        <Card className={classes['input']}>
        <form onSubmit={AddUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={username} onChange={onChangeUsernameHandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' value={age} onChange={onChangeAgeHandler}/>
            <Button type='submit'>Add User</Button>
        </form>
        </Card>
    )
}