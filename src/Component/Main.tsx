import React from 'react';
import Header from './Header/HeaderContainer';
import MainConatiner from './Main/MainConatiner';

const Main = () => {
    return (
        <div className="Main">
            <Header/>
            <MainConatiner />
            <button type="button" className="btn btn-danger">danger</button>
        </div>
    );
};

export default Main;