import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';



const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') }
  }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: action.value.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
}

const Login = (props) => {
  const [emailState, emailDispatch] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, passwordDispath] = useReducer(passwordReducer, { value: '', isValid: null });
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(
        emailState.value.includes('@') && passwordState.value.trim().length > 6
      );
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [emailState, passwordState])

  const emailChangeHandler = (event) => {
    emailDispatch({
      type: 'USER_INPUT',
      value: event.target.value
    })
  };

  const passwordChangeHandler = (event) => {
    passwordDispath({
      type: 'USER_INPUT',
      value: event.target.value
    })
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    passwordDispath({ type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
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
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
