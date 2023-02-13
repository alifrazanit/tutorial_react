import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { AuthContext } from '../../store/auth-context';



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
  const emailRef = useRef();
  const passRef = useRef();


  const ctx = useContext(AuthContext);
  const [emailState, emailDispatch] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, passwordDispath] = useReducer(passwordReducer, { value: '', isValid: null });
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;


  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    emailDispatch({
      type: 'USER_INPUT',
      value: event.target.value
    });
    setFormIsValid(event.target.value.includes('@') && passwordState.isValid)
  };

  const passwordChangeHandler = (event) => {
    passwordDispath({
      type: 'USER_INPUT',
      value: event.target.value
    })
    setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid)
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    passwordDispath({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <Input
            ref={emailRef}
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
          <Input
            ref={passRef}
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
