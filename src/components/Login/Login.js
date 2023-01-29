import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.value, isValid: action.value.includes('@')};
  }
  if(action.type === 'ON_BLUR'){
    return { value: state.value, isValid:  state.value.includes('@')};
  }
  return { value: '', isValid: false};
}


const Login = (props) => {
  const [emailState, emailDispatched] = useReducer(emailReducer, { value: '', isValid: null});


  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500)

    return () => {
      clearTimeout(identifier);
    }
  },[emailState, enteredPassword])


  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // emailDispatched({ value: event.target.value, isValid: })
    emailDispatched({ type: 'USER_INPUT', value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    emailDispatched({ type: 'ON_BLUR'});
    // setEmailIsValid(emailState.value.includes('@'));

  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
