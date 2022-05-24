import React from 'react';
import im from '../../Images/im.png'
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { Bounce } from 'react-reveal';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <img className=' w-50 h-[350px] mx-auto' src={im} alt="" />
            <div className='flex container shadow-lg rounded-md my-3'>
                <div className=' bg-neutral text-white p-5'>
                    <h1 className='text-2xl my-2'>Contact</h1>
                    <p className='flex items-center my-1'><GoLocation></GoLocation>Uttara,Dhaka,Bangladesh</p>
                    <p className='flex items-center my-1'><BsTelephone></BsTelephone>+8801771162711</p>
                    <h1 className='text-xl underline underline-offset-2 text-center'>SOCIAL</h1>
                    <div class="grid my-3 grid-flow-col gap-4 text-2xl  ">
                        <a href="https://www.facebook.com/mahabub.remeber.it/"> <Bounce top><BsFacebook className=' hover:text-blue-500 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></BsFacebook></Bounce></a>
                        <a href="https://twitter.com/TheMahabub"> <Bounce bottom><BsTwitter className='hover:text-blue-500 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></BsTwitter></Bounce></a>
                        <a href="https://www.linkedin.com/in/mahabub-alam-developer/"><Bounce left><AiFillLinkedin className='hover:text-blue-500 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></AiFillLinkedin></Bounce></a>
                        <a href="https://github.com/Mahabub09"> <Bounce right><BsGithub className='hover:text-neutral transition ease-in-out delay-300 hover:bg-black hover:-translate-y-1 hover:scale-125'></BsGithub></Bounce></a>
                    </div>
                    <hr />
                    <h1 className='text-2xl'> Top Skills</h1>
                    <li>REACT.JS</li>
                    <li>JAVASCRIPT</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>MONGODB</li>
                    <li>AUTHENTICATION</li>
                    And Bunch Of FrameWorks
                    <hr />
                    <h1 className='text-xl text-center underline underline-offset-2 my-4'>Few Works of Mine</h1>
                    <li><a className='underline underline-offset-2 hover:text-accent ' href=" https://getcracking-gears.web.app/"> GET CRACKING GEARS</a></li>
                    <li><a className='underline underline-offset-2 hover:text-accent ' href="  https://paradise-resort-assignment10.web.app/"> PARADISE RESORT</a></li>
                    <li><a className='underline underline-offset-2 hover:text-accent' href=" https://assignment3-firewood-conventioncenter.netlify.app/"> FIREWOOD CONVENTION CENTER</a></li>

                </div>
                <div className='p-5'>
                    <h1 className='text-4xl  font-serif'> MAHABUB ALAM</h1>

                    <h1 className='text-xl my-2'>Wanna Be A Full Stack Web Developer</h1>
                    <h1 className='font-bold my-2'>Lives in: Dhaka</h1>
                    <h1 className='font-bold my-2'>Education: Armed Police Battalion School And College </h1>
                    <p><b>HSC BATCH 2020</b></p>
                    <p> <b>Summary:</b>
                        Hello!! I am 19 years a curious Boy. Who loves to explore. Who
                        is very confident with his skills and also with his works . I used to
                        explore such as complicated things with various ways . During these
                        times I have learned how to Develop a site . and now i an admit
                        i am a professional Full Stack web developer with React.js and
                        JavaScript. and I have learned many languages , frameworks and
                        libraries. There are-</p>
                    <li>-HTML,</li>
                    <li>-HTML5,</li>
                    <li>-CSS,</li>
                    <li>-CSS3,</li>
                    <li>-Bootstrap,</li>
                    <li>-Tailwind CSS,</li>
                    <li>-JavaScript,</li>
                    <li>-jQuery,</li>
                    <li>-API,</li>
                    <li>-Public API,</li>
                    <li>-Custom API,</li>
                    <li>-React.js,</li>
                    <li>-React Router,</li>
                    <li>-React Hooks,</li>
                    <li>-Debugging,</li>
                    <li>-MongoDB,</li>
                    <li>-DaisyUI</li>
                    <p>etc...
                        And i am exploring till now</p>
                    <p><b>Experience</b>Programming Hero <br />
                        6 months <br />
                        Student</p>

                </div>
            </div>

        </div>
    );
};

export default MyPortfolio;