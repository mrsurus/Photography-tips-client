import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut =()=> {
       logOut()
       .then()
       .catch()
    }

    return (
        <div className="navbar bg-purple-600">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='/'>Home</Link>
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='blog'>Blog</Link>
                       {
                        user?.email && <>
                         <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='myreview'>My Review</Link>
                        <Link className='bg-violet-200 py-2 my-2 text-center font-semibold' to='addservice'>Add Services</Link>
                        </>
                       }
                    </ul>
                </div>
                <p className="btn btn-ghost text-white font-extrabold text-3xl">Photo Tips</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='/'>Home</Link>
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='blog'>Blog</Link>
                    {
                      user?.email && 
                      <>
                      <Link className=' px-2 mx-3 text-white text-center  text-xl' to='myreview'>My Review</Link>
                    <Link className=' px-2 mx-3 text-white text-center  text-xl' to='addservice'>Add Services</Link>
                      </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email? <Link onClick={handleLogOut}><button className='btn'>Log Out</button></Link> : <Link to='/login'><button className='btn'>Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;