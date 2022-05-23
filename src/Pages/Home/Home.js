import React from 'react';
import { Bounce } from 'react-reveal';
import Banner from '../../Components/Banner/Banner';
import BSummary from '../../Components/BSummary/BSummary';
import Features from '../../Components/Features/Features';
import Reviews from '../../Components/Reviews/Reviews';
import Tool from '../../Components/Tool/Tool';
import Tools from '../../Components/Tools/Tools';
import UseTools from '../../Hooks/UseTools';


const Home = () => {
    const [tools] = UseTools();

    return (

        <div>
            <Banner></Banner>
            <Features></Features>
            <Bounce top>
                <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-4'>
                    {
                        tools.slice(0, 6).map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        >
                        </Tool>)
                    }
                </div>
            </Bounce>
            <BSummary></BSummary>

            <Reviews></Reviews>


        </div>
    );
};

export default Home;