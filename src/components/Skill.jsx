// import React from 'react'

// const Skill = () => {
//     return (
//         <section id="skills" className="px-8 py-20 bg-gray-900">
//             <div className="max-w-5xl mx-auto">
//                 <h3 className="text-3xl font-bold mb-10 text-teal-400">Skills</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                     {["Bootstrap", "React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase", "Git & GitHub", "Figma", " C++ OpenGL", " Python (basic) "].map(skill => (
//                         <div key={skill} className="bg-gray-800 p-4 rounded-xl text-center shadow hover:scale-105 transition">
//                             {skill}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Skill

import React from "react";
import {
    FaBootstrap,
    FaReact,
    FaJs,
    FaNodeJs,
    FaGitAlt,
    FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";
import { TbBrandCpp, TbBrandPython } from "react-icons/tb";
import { HiOutlineDatabase } from "react-icons/hi";


const skills = [
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 animate-bounce" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 animate-spin"  /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 animate-bounce" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 animate-pulse" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 animate-pulse" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300 animate-ping" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 animate-pulse" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400 animate-bounce" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400 animate-bounce" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 animate-pulse" /> },
    { name: "C++ OpenGL", icon: <TbBrandCpp className="text-blue-400 animate-ping" /> },
    { name: "Python (Basic)", icon: <TbBrandPython className="text-yellow-300 animate-pulse" /> },
    { name: "MySQL", icon: <HiOutlineDatabase className="text-blue-400 animate-pulse" /> },
];

const Skill = () => {
    return (
        <section id="skills" className="px-8 py-20 bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-10 text-teal-400">Skills</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="bg-gray-800 p-5 rounded-xl text-center shadow-lg hover:shadow-teal-500/20 hover:scale-105 transition flex flex-col items-center gap-3"
                        >
                            <div className="text-3xl">{skill.icon}</div>
                            <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
