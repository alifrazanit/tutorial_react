import { Button } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import classes from './add-user.module.css';
import { useState } from 'react';
import { ErrorModal } from '../UI/ErrorModal/ErrorModal';
export const AddUser = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [isValid, setIsValid] = useState(true);
    const AddUserHandler = event => {
        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            setIsValid({
                title: 'Error!',
                message: 'Please Enter Correct Username and Age'
            });
            return;
        }
        if (+age < 1) {
            setIsValid({
                title: 'Error!',
                message: 'Please Enter Correct Age > 1'
            });
            return;
        }
        props.onAddUser({ username, age })

        setUsername('');
        setAge('');

    }
    const onChangeUsernameHandler = e => {
        setUsername(e.target.value);
    }
    const onChangeAgeHandler = e => {
        setAge(e.target.value);
    }
    const setErrorHandler = () => {
        setIsValid(null);
    }
    return (
        <>
            {isValid && (<ErrorModal title={isValid.title} message={isValid.message} onClickOkay={setErrorHandler}/>)}
            <Card className={classes['input']}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={username} onChange={onChangeUsernameHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={age} onChange={onChangeAgeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>

    )
}