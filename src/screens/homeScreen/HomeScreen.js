import React from 'react';
import './HomeScreen.scss';


const HomeScreen = ({children}) => {
    return (
        <div className="home">
            {children}
        </div>
    )
};

export default HomeScreen;