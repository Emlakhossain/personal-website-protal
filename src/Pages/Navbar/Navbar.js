import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo (3).png'

const Navbar = () => {
    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourService'>Our Service</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact US</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
        <li><Link to='/pricing'>Pricing</Link></li>

    </>


    return (
        <div class="navbar ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}

                    </ul>
                </div>
                <Link to="/"> <a class="btn btn-ghost normal-case text-xl">

                    <img height={150} src={logo} alt="" />
                </a></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navLink}

                </ul>
            </div>
            <div class="flex-none gap-2 navbar-end">
                <Link to='/login'><button className='btn'>Login</button></Link>
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-bordered" />
                </div>
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span class="badge badge-sm indicator-item">8</span>
                    </div>
                </label>
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" />
                        </div>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;