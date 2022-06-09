import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import { GrReactjs, GrNode } from "react-icons/gr";
import { SiBootstrap, SiTailwindcss, SiMongodb, SiHtml5, SiCss3 } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import { IoPlayForwardSharp } from "react-icons/io5";

const Projects = () => {
    return (
        <div id='projects' className='projects bg-base-200 py-20'>
            <h2 className='text-center text-4xl text-primary uppercase font-bold'>My Projects</h2>
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
                        <hr />
                        <div class="card-actions justify-around mt-5">
                            <a class="btn btn-sm btn-outline btn-primary" href='https://github.com/Azmain951/exam-prep-client' target='_blank'>Client <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                            <a class="btn btn-sm btn-outline btn-primary" href='https://examprep-1edff.web.app/' target='_blank'>Website <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                            <a class="btn btn-sm btn-outline btn-primary" href='https://github.com/Azmain951/exam-prep-server' target='_blank'>Server <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
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
                        <hr />
                        <div class="card-actions justify-around mt-5">
                            <a class="btn btn-sm btn-outline btn-primary" href='https://github.com/Azmain951/Cars_and_Parts_Client' target='_blank'>Client <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                            <a class="btn btn-sm btn-outline btn-primary" href='https://manufacturer-website-6cbb8.web.app/' target='_blank'>Website <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                            <a class="btn btn-sm btn-outline btn-primary" href='https://github.com/Azmain951/Cars_and_Parts_Server' target='_blank'>Server <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
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
                        <hr />
                        <div class="card-actions justify-between mt-5">
                            <a class="btn btn-sm btn-outline btn-primary" href='https://github.com/Azmain951/fruit-basket-client' target='_blank'>Client <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                            <a class="btn btn-sm btn-outline btn-primary" href='https://fruit-basket-523c2.web.app/' target='_blank'>Website <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                            <a class="btn btn-sm btn-outline btn-primary" href='https://github.com/Azmain951/fruit-basket-server' target='_blank'>Server <span className='text-md ml-1'><GoLinkExternal></GoLinkExternal></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;