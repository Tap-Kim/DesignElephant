import React from 'react';
import Header from './Header/HeaderContainer';
import MainComponent from './Main/MainComponent';

const Main = () => {
    return (
        <div className="root_main">
            <Header/>
            <MainComponent />
        </div>
    );
};

export default Main;