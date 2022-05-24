import React from 'react';
import CountUp from 'react-countup';
import bgd from '../../Images/bgd.png'
import { ImFlag } from 'react-icons/im';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';
import { FcFeedback } from 'react-icons/fc';
import { AiOutlinePlus } from 'react-icons/ai';

const BSummary = () => {
    return (
        <div className='p-4 my-5  container shadow-lg rounded-md' style={{
            background: `url(${bgd})`,
            backgroundSize: 'cover'
        }} >
            <h1 className='text-center text-neutral text-4xl mb-4  underline underline-offset-8'>Millions Of Supplier Trust Us</h1>
            <div className=' lg:flex justify-between '>
                <div className='text-center'>
                    <ImFlag className='text-6xl mx-auto text-accent-focus my-2  '></ImFlag>
                    <div className='mx-auto text-neutral  flex items-center'>
                        <CountUp className='text-5xl' end={69} duration={5}></CountUp><AiOutlinePlus className='text-3xl' ></AiOutlinePlus>
                    </div>
                    <p className='text-accent text-2xl'>Countries</p>
                </div>
                <div className='text-center'>
                    <AiOutlineFundProjectionScreen className='text-6xl mx-auto text-accent-focus my-2 '></AiOutlineFundProjectionScreen>
                    <div className='mx-auto text-neutral  flex items-center'>
                        <CountUp className='text-5xl' end={2360} duration={5}></CountUp>
                        <AiOutlinePlus className='text-3xl' ></AiOutlinePlus>
                    </div>
                    <p className='text-accent text-2xl'>Complete Projects</p>

                </div>
                <div className='text-center'>
                    <IoIosPeople className='text-6xl mx-auto text-accent-focus my-2 '></IoIosPeople>
                    <div className='mx-auto text-neutral  flex items-center'>
                        <CountUp className='text-5xl' end={697} duration={5}></CountUp>
                        <AiOutlinePlus className='text-3xl' ></AiOutlinePlus>
                    </div>
                    <p className='text-accent text-2xl'>Happy Clients</p>

                </div>
                <div className='text-center'>
                    <FcFeedback className='text-6xl mx-auto text-accent-focus my-2 '></FcFeedback>
                    <div className='mx-auto text-neutral  flex items-center'>
                        <CountUp className='text-5xl' end={245} duration={5}></CountUp>
                        <AiOutlinePlus className='text-3xl' ></AiOutlinePlus>
                    </div>
                    <p className='text-accent text-2xl'>Feedbacks</p>

                </div>

            </div>



        </div >
    );
};

export default BSummary;