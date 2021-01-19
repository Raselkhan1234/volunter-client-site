import React from 'react';
import DisplayImage from '../DisplayImage/DisplayImage';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <DisplayImage/>
            </div>
        </div>
    );
};

export default Home;