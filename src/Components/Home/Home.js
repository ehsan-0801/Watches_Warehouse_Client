import React from 'react';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import PageTitle from '../PageTitle/PageTitle';
import Stats from '../Stats/Stats';
import Watches from '../Watches/Watches';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Watches></Watches>
            <Stats></Stats>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;