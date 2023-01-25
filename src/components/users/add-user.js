import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import classes from './add-user.module.css';
import { useState } from 'react';
export const AddUser = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const AddUserHandler = event => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            return;
        }
        if(+age < 0){
            return;
        }
        console.log(username, age)
        props.onAddUser({username, age})
        
        setUsername('');
        setAge('');
        
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