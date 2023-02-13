import classes from './Modal.module.css';
import React from 'react-dom'
import { Fragment } from 'react';
export const Backdrop = props => {
    return (
        <div className={classes.backdrop} />
    )
}

export const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

export const Modal = props => {
    const overlays = document.getElementById('root-modal')
    return (
        <Fragment>
            {React.createPortal(<Backdrop />, overlays)}
            {React.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
        </Fragment>

    )
}