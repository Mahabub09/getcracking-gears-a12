import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BSummary from '../../Components/BSummary/BSummary';
import Features from '../../Components/Features/Features';
import Reviews from '../../Components/Reviews/Reviews';
import Tools from '../../Components/Tools/Tools';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Tools></Tools>
            <BSummary></BSummary>

            <Reviews></Reviews>


        </div>
    );
};

export default Home;