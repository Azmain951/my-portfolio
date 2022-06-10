import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaLinkedinIn, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer py-20 flex flex-col justify-center items-center'>
            <div className='flex text-4xl text-center text-accent justify-center items-center gap-6'>
                <FaGithubSquare></FaGithubSquare>
                <FaLinkedinIn></FaLinkedinIn>
                <FaFacebookSquare></FaFacebookSquare>
            </div>
            <div className='text-gray-400'>
                <p className='text-lg text-center'>Ahmed-Al-Azmain <span className='text-accent'>&copy;{year}</span></p>
            </div>
        </div>
    );
};

export default Footer;