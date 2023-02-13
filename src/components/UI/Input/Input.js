import React from "react"
import clasess from './Input.module.css'
export const Input = React.forwardRef((props, ref) => {
    return (
        <div
            className={`${props.className} ${emailState.isValid === false ? classes.invalid : ''}`}
        >
            <label htmlFor="email">E-Mail</label>
            <input
                ref={props.ref}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}>{props.children}</input>
        </div>
    )
});