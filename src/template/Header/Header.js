import classes from './Header.module.css';
import { Fragment } from 'react';
import img from '../../assets/img.png';
import { HeaderButton } from '../HeaderButton/HeaderButton';
export const Header = props => {
    return (
        <Fragment>
            <header className={classes['header']}>
                <h1>React Meals</h1>
                <HeaderButton onClick={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={img} />
            </div>
        </Fragment>
    )
}