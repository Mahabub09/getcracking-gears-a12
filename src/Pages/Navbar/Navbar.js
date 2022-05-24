import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/logo.png'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    const navBarItems = <>
        <li className='p-[-16px]'><Link to="/home">HOME</Link></li>
        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/myPortfolio">MY PORTFOLIO</Link></li>
        {
            user && <>
                <li><Link to="/addReview">ADD REVIEW</Link></li>
                <li><Link to="/addTools">ADD TOOLS</Link></li>
                <li><Link to="/allTools">ALL TOOLS</Link></li></>
        }
        <li>{user ? <button className="btn mt-1 btn-ghost" onClick={handleSignOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
        <img className=' w-[45px] rounded-full mx-auto' src={user?.photoURL} alt="" />
        <li className='p-3 ' >

            {user?.displayName}
        </li>

    </>
    return (
        <div>
            <div className="navbar bg-neutral text-white">
                <div className="navbar-start w-[75px]">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                            {navBarItems}

                        </ul>
                    </div>
                    <Link to="/home" className="hover:text-white   "><img className='w-[70px] ' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        {navBarItems}

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;