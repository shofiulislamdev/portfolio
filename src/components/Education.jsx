import React from 'react'

import { FaGraduationCap } from "react-icons/fa6";


const Education = () => {

    const educationData = [
        {
            degree: "B.Sc. in Computer Science & Engineering",
            institution: "Daffodil International University",
            duration: "Passing Year - 2024",
            result: " CGPA 3.67 out of 4.00",
            description:
                "Completed undergraduate studies with a strong foundation in programming, database systems, software engineering, and web development. Actively involved in academic projects, research work, and programming activities.",
        },
    ];

    return (
        <section id="education" className="px-8 py-20 bg-gray-950">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-10 text-teal-400">
                    Education
                </h3>

                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-2xl hover:scale-105 shadow-lg hover:shadow-teal-500/20 transition duration-300"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <FaGraduationCap className="text-teal-400 text-2xl animate-bounce" />
                            <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        </div>

                        <p className="text-gray-400 font-medium">
                            {edu.institution}
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            {edu.duration}
                        </p>

                        <p className='text-gray-400 font-medium'>
                            {edu.result}
                        </p>

                        <p className="text-gray-400 text-justify leading-relaxed mt-5">
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education