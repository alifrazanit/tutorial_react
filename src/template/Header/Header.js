import classes from './Header.module.css';
import imgHeader from '../../assets/images/meals.jpg';
import { Fragment } from 'react';
import { HeaderButton } from './HeaderButton/HeaderButton';
export const Header = props => {
    return (
        <Fragment>
            <header className={classes['header']}>
                <h1>ReactMeals</h1>
                <HeaderButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={imgHeader} />
            </div>
        </Fragment>
    )
}