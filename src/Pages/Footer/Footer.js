import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Bounce } from 'react-reveal';

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div class="grid grid-flow-col gap-4">
                    <Link to='/' class="link link-hover">About us</Link>
                    <Link to='/' class="link link-hover">Contact</Link>
                    <Link to='/' class="link link-hover">Jobs</Link>
                    <Link to='/' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <div class="grid grid-flow-col gap-4 text-2xl  ">
                        <Bounce top><BsFacebook className=' hover:text-blue-500 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></BsFacebook></Bounce>
                        <Bounce bottom><BsTwitter className='hover:text-blue-500 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></BsTwitter></Bounce>
                        <Bounce left><AiFillLinkedin className='hover:text-blue-500 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></AiFillLinkedin></Bounce>
                        <Bounce right><BsGithub className='hover:text-neutral transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-125'></BsGithub></Bounce>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by SINEWY TOOLS</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;