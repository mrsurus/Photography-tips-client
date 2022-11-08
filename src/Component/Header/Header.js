import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-purple-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='/'>Home</Link>
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='myreview'>My Review</Link>
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='addservices'>Add Services</Link>
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='blog'>Blog</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-white font-extrabold text-3xl">Photo Tips</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='/'>Home</Link>
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='myreview'>My Review</Link>
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='addservices'>Add Services</Link>
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='blog'>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;