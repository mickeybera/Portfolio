import React from 'react'

import pic from "../../public/photo.avif";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped, } from "react-typed";
function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span>welcome to my feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello I'am a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped className='text-purple-800 font-bold'
                                strings={["Developer","Programmer","Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Welcome to my developer portfolio! I'm a passionate software developer specializing in creating innovative and efficient solutions. With a strong foundation in web development, I have experience building responsive and user-friendly applications using the latest technologies. My portfolio showcases a variety of projects that highlight my skills in front-end and back-end development, problem-solving, and collaboration. I’m always eager to take on new challenges and contribute to impactful projects. Let's connect and explore how I can bring your ideas to life with clean, scalable code!</p>
                        <br />
                        {/* social media */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Avilable on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/arpan.bera.5623?mibextid=kFxxJD" target='_blank'>
                                        <FaSquareFacebook className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/arpan-bera-13922a269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                                        <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/arpanbera475?igsh=eHlzenEwd2FkaGpw" target='_blank'>
                                        <FaInstagram className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mickeybera" target='_blank'>
                                        <FaGithub className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className='md:w-1/2 mt-8 md:mt-20 md:ml-48 order-1'>
                    <img src={pic} className='rounded-full w-[450px] h-[450px]' alt="" />
                    </div>
                </div>
            </div>
            
            <hr />
        </>
    )
}

export default Home
