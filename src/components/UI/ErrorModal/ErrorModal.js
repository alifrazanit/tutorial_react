import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import classes from './ErrorModal.module.css';
import{ Fragment } from 'react';
import ReactDOM from 'react-dom';
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClickOkay}></div>
}

const Modal = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClickOkay}>Okay</Button>
            </footer>
        </Card>
    )
}

export const ErrorModal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClickOkay={props.onClickOkay}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal 
                title={props.title}
                message={props.message}
                onClickOkay={props.onClickOkay}/>, document.getElementById('modal-root'))}
        </Fragment>
    )
}