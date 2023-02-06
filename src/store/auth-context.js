import React, { useState,  useEffect } from 'react';
export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});


export const AuthProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        const loginInformation = localStorage.getItem('isLogin');
        if(loginInformation === '1'){
            setIsLoggedIn(true);
        }
    },[])
    
    const loginHandler = (email, password) => {
        localStorage.setItem('isLogin', '1');
        setIsLoggedIn(true);
    };
    const logoutHandler = () => {
        localStorage.removeItem('isLogin')
        setIsLoggedIn(false);
    };


    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>
}