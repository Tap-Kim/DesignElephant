import React from 'react';
import Header from './Header/HeaderContainer';
import MainConatiner from './Main/MainConatiner';

const Main = () => {
    return (
        <div className="root_main">
            <Header/>
            <MainConatiner />
        </div>
    );
};

export default Main;