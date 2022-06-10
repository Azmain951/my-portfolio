import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='px-5 header'>
            <div class="navbar">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-outline btn-accent lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#projects'>Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal text-white uppercase p-0">
                        <li><a>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="resume btn btn-sm btn-outline btn-accent text-white" href='https://drive.google.com/file/d/114KCYE_J4N32Mm8boqOId2lfO7V4Lou5/view?usp=sharing' target='_blank' rel='noreferrer'>My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Header;