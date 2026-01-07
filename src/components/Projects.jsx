import React from 'react'
import { FaHtml5, FaReact, FaJs, } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

import petroil from "../assets/petroil.jpeg"
import postman from "../assets/postman.jpg"
import numbergame from "../assets/numbergame.jpg"




const Projects = () => {
    const projects = [
        {
            image: postman,
            title: "Postman",
            description:
                "A realtime chat application using React, Firebase Authentication, Realtime Database and Tailwind CSS.",
            liveLink: "https://postman-beta.vercel.app/",
            code: "https://github.com/shofiulislamdev/postman",
            tech: ["html", "tailwind", "react", "firebase"]
        },
        {
            image: numbergame,
            title: "Number Guessing Game",
            description:
                "First, Player One will enter his name, and then the game will start. After that, Player One will choose a number. Next, Player Two will enter his name and try to guess the number chosen by Player One. If Player Two guesses the correct number, Player Two will win. If the guess is incorrect, Player One will win. Player Two will have a total of five chances to guess Player One’s number.",
            liveLink: "https://shofiulislamdev.github.io/JS_GAME/",
            code: "https://github.com/shofiulislamdev/JS_GAME",
            tech: ["html", "tailwind", "js"]
        },

        {
            image: petroil,
            title: "Petroil project",
            description:
                "I built this project with React and Tailwind CSS, ensuring a responsive design that works smoothly on small devices.",
            liveLink: "https://petroil-project-rgs8.vercel.app/",
            code: "https://github.com/shofiulislamdev/petroil-project",
            tech: ["react", "tailwind", "html"]
        },
    ];

    return (
        <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-teal-400">Projects</h3>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 rounded-2xl hover:scale-105 shadow-lg p-6 hover:shadow-teal-500/20 transition"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-44 object-cover rounded-xl mb-4"
                        />

                        <h4 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h4>

                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>


                        <div className="flex gap-3 text-xl text-teal-400 mb-4">
                            {project.tech.includes("html") && <FaHtml5 className='animate-bounce' />}
                            {project.tech.includes("tailwind") && <SiTailwindcss className='animate-pulse' />}
                            {project.tech.includes("react") && (
                                <FaReact className='animate-spin' />
                            )}
                            {project.tech.includes("js") && <FaJs className='animate-bounce' />}
                            {project.tech.includes("firebase") && <SiFirebase className='animate-bounce' />}
                        </div>

                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1 text-sm border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-black transition"
                        >
                            View Details
                        </a>

                        <a href={project.code}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='px-4 py-1 ml-27 text-[14px] border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-black transition'
                        >Code</a>


                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects