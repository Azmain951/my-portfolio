import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner flex flex-col justify-center items-center'>
            <h1 className='text-white text-5xl mb-2'>Hello, I'm <span className='text-accent'>Ahmed-Al-Azmain</span>.</h1>
            <h1 className='text-white text-5xl'>I'm a full stack web developer.</h1>
            <button class="mt-7 btn btn-lg btn-outline btn-accent">View My Works</button>
        </div>
    );
};

export default Banner;