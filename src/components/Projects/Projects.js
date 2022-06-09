import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import { GrReactjs, GrNode } from "react-icons/gr";
import { SiBootstrap, SiTailwindcss, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si";

const Projects = () => {
    return (
        <div id='projects' className='projects bg-base-200 py-10'>
            <h2 className='text-center text-4xl text-primary uppercase'>My Projects</h2>
            <div className='grid grid-cols-3 gap-10 mt-16 m-10'>
                <div class="card bg-base-100 shadow-xl">
                    <figure className='shadow-sm'><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-4xl text-primary text-center">
                            Exam Prep
                        </h2>
                        <hr />
                        <p className='text-justify'>An Exam Preparation Website for users to participate in different exams.</p>
                        <p className='text-justify'>Option for admin to add and delete questions in different exam categories.</p>
                        <p className='text-justify'>Profile, Analytics and Leaderboard page to show exam records and track progress.</p>
                        <hr />
                        <div>
                            <p className='uppercase text-center font-bold text-accent'>Technology Used</p>
                            <div className='flex justify-evenly items-center p-5 text-primary text-3xl'>
                                <SiHtml5></SiHtml5>
                                <SiCss3></SiCss3>
                                <SiBootstrap></SiBootstrap>
                                <GrReactjs></GrReactjs>
                                <GrNode></GrNode>
                                <SiMongodb></SiMongodb>
                            </div>
                        </div>
                        <div class="card-actions justify-around mt-5">
                            <a class="btn btn-sm btn-outline btn-accent" href='https://examprep-1edff.web.app/' target='_blank'>Client</a>
                            <a class="btn btn-sm btn-outline btn-accent" href='https://examprep-1edff.web.app/' target='_blank'>Website</a>
                            <a class="btn btn-sm btn-outline btn-accent" href='https://examprep-1edff.web.app/' target='_blank'>Server</a>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure className='shadow-sm'><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-4xl text-primary text-center">
                            Cars and Parts
                        </h2>
                        <hr />
                        <p className='text-justify'>This website has different dashboard system for User and Admin.</p>
                        <p className='text-justify'>The user can place order, pay for order via payment system, can cancel order and keep track of the order form the dashboard.</p>
                        <p className='text-justify'>The admin can add products, manage products, manage orders and make admin.</p>
                        <hr />
                        <div>
                            <p className='uppercase text-center font-bold text-accent'>Technology Used</p>
                            <div className='flex justify-evenly items-center p-5 text-primary text-3xl'>
                                <SiHtml5></SiHtml5>
                                <SiCss3></SiCss3>
                                <SiTailwindcss></SiTailwindcss>
                                <GrReactjs></GrReactjs>
                                <GrNode></GrNode>
                                <SiMongodb></SiMongodb>
                            </div>
                        </div>
                        <div class="card-actions justify-around mt-5">
                            <a class="btn btn-sm btn-outline btn-accent" href='https://manufacturer-website-6cbb8.web.app/' target='_blank'>Client</a>
                            <a class="btn btn-sm btn-outline btn-accent" href='https://manufacturer-website-6cbb8.web.app/' target='_blank'>Website</a>
                            <a class="btn btn-sm btn-outline btn-accent" href='https://manufacturer-website-6cbb8.web.app/' target='_blank'>Server</a>
                        </div>

                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure className='shadow-sm'><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="text-4xl text-primary text-center">
                            Fruit Basket
                        </h2>
                        <hr />
                        <p className='text-justify'>Full Stack(MERN) Storage Website including features to add and remove fruits.</p>
                        <p className='text-justify'>Option for users to restock fruits and delivery option.</p>
                        <p className='text-justify'>Secure API to show user's added items on my items page.</p>
                        <hr />
                        <div>
                            <p className='uppercase text-center font-bold text-accent'>Technology Used</p>
                            <div className='flex justify-evenly items-center p-5 text-primary text-3xl'>
                                <SiHtml5></SiHtml5>
                                <SiCss3></SiCss3>
                                <SiBootstrap></SiBootstrap>
                                <GrReactjs></GrReactjs>
                                <GrNode></GrNode>
                                <SiMongodb></SiMongodb>
                            </div>
                        </div>
                        <div class="card-actions justify-between mt-5">
                            <a class="btn btn-sm btn-outline btn-accent" href='https://fruit-basket-523c2.web.app/' target='_blank'>Client</a>
                            <a class="btn btn-sm btn-outline btn-accent" href='https://fruit-basket-523c2.web.app/' target='_blank'>Website</a>
                            <a class="btn btn-sm btn-outline btn-accent" href='https://fruit-basket-523c2.web.app/' target='_blank'>Server</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;