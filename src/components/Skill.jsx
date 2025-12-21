import React from 'react'

const Skill = () => {
    return (
        <section id="skills" className="px-8 py-20 bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-10 text-teal-400">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Bootstrap", "React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase", "Git & GitHub", "Figma", " C++ OpenGL", " Python (basic) "].map(skill => (
                        <div key={skill} className="bg-gray-800 p-4 rounded-xl text-center shadow hover:scale-105 transition">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill