import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BSummary from '../../Components/BSummary/BSummary';
import Features from '../../Components/Features/Features';
import Tools from '../../Components/Tools/Tools';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Tools></Tools>
            <BSummary></BSummary>


        </div>
    );
};

export default Home;