import React, { useContext} from 'react';
import { AuthContext } from '../../store/auth-context';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <header className={classes['main-header']}>
      { ctx.isLoggedIn && <h1>Berhasil Login</h1>}
      { !ctx.isLoggedIn && <h1>Gagal Login</h1>}
      <Navigation />
    </header>
  );
};

export default MainHeader;
