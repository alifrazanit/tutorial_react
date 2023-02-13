import classes from './Modals.module.css';
import React from 'react-dom';
import { Fragment } from 'react';
export const BackDrop = props => {
    return <div className={classes['backdrop']} onClick={props.onHideCart}></div>
}

export const ModalOverlays = props => {
    return <div className={classes['modal']}>
        {props.children}
    </div>
}

const portalElement = document.getElementById('overlays');
export const Modal = props => {
    return (
        <Fragment>
            {React.createPortal(<BackDrop onHideCart={props.onHideCart}/>, portalElement)}
            {React.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </Fragment>
    )
}