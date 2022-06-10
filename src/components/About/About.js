import React from 'react';
import avatar from '../../images/avatar.jpeg';
import './About.css';

const About = () => {

    const skills = [
        { name: 'HTML', expertise: 90 },
        { name: 'CSS', expertise: 90 },
        { name: 'React', expertise: 80 },
        { name: 'JavaScript', expertise: 80 },
        { name: 'Node.js', expertise: 50 },
        { name: 'MongoDB', expertise: 60 },
    ]

    return (
        <div id='about' className='about py-20'>
            <h2 className='text-center text-4xl text-primary uppercase font-bold'>About Me</h2>
            <div className='flex mt-14'>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    <div class="avatar">
                        <div class="w-48 mask mask-hexagon">
                            <img src={avatar} alt='person' />
                        </div>
                    </div>
                    <p className='w-3/4 text-center mt-4 text-primary italic font-semibold'>Self-motivated IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, MERN Stack and mobile responsive website development, as well as highly potent skills and ability in encoding efficient code.</p>
                </div>
                <div className='w-1/2 flex flex-col justify-center items-center'>
                    {
                        skills.map(skill => <>
                            <p className='flex justify-between w-3/4'><span>{skill.name}</span> <span>{skill.expertise}%</span></p>
                            <progress class="progress-accent w-3/4 mb-3" value={skill.expertise} max="100"></progress>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;