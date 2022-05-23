import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
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
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/blogs">BLOGS</Link></li>
        <li><Link to="/addReview">ADD REVIEW</Link></li>
        <li>{user ? <button className="btn mt-1 btn-ghost" onClick={handleSignOut} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
        <img className=' w-[45px] rounded-full mx-auto' src={user?.photoURL} alt="" />
        <Nav.Link className='p-3 ' >

            {user?.displayName}
        </Nav.Link>

    </>
    return (
        <div>
            <div className="navbar bg-neutral text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-primary">
                            {navBarItems}

                        </ul>
                    </div>
                    <Link to="/home" className="hover:text-white  ml-10 text-xl"><img className='w-[70px] ' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navBarItems}

                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navbar;