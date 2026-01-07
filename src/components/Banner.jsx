import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";




const Banner = () => {
    return (
        <section className="pt-32 pb-24 text-center bg-gradient-to-b from-gray-900 to-gray-950">
            <div>
                <h1 className='text-[48px] font-bold font-secondary'>Hello!</h1>
                <p className='text-[48px] font-bold font-secondary bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient'>This is Md. Shofiul Islam</p>
            </div>
            <h2 className="text-4xl font-extrabold mb-4">Computer Engineer & Web Developer</h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-6">
                {/* Passionate about building modern web applications using React, Tailwind CSS, Firebase and MERN stack. */}
                To establish myself as a MERN Stack Developer in local, international, and multinational organizations by
                delivering value through scalable web applications, problem-solving, and innovative solutions
            </p>
            <a href="#projects" className="px-6 py-3 bg-teal-500 rounded-full text-gray-900 font-semibold hover:bg-teal-400">
                View My Work
            </a>

            <a href="#contact" className="px-6 py-3 ml-2 bg-teal-500 rounded-full text-gray-900 font-semibold hover:bg-teal-400">
                Contact With Me
            </a>

            <div className='flex justify-center mt-10 space-x-3'>
                <div className=''>
                    <a href="https://github.com/shofiulislamdev" target='_blank' rel="noopener noreferrer"><FaGithub className='text-teal-400 size-7' /></a>
                </div>

                <div>
                    <a href="" target='_blank' rel="noopener noreferrer"><FaLinkedin className='text-teal-400 size-7' /></a>
                </div>

                <div>
                    <a href="" target='_blank' rel="noopener noreferrer"><FaFacebook className='text-teal-400 size-7' /></a>
                </div>

                <div>
                    <a href="" target='_blank' rel="noopener noreferrer"><MdEmail className='text-teal-400 size-7' /></a>
                </div>

                {/* <div className='text-center'>
                    <a href="https://github.com/shofiulislamdev" target='_blank'><FaGithub className='text-cyan-400 size-7' /></a>
                </div> */}
            </div>
        </section>
    )
}

export default Banner