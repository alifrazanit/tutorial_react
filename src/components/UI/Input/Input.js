import classes from "./Input.module.css";
import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ""}`}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
