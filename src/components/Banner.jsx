import React from 'react'

const Banner = () => {
    return (
        <section className="pt-32 pb-24 text-center bg-gradient-to-b from-gray-900 to-gray-950">
            <h2 className="text-4xl font-extrabold mb-4">Computer Engineer & Web Developer</h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-6">
                Passionate about building modern web applications using React, Tailwind CSS, Firebase and MERN stack.
            </p>
            <a href="#projects" className="px-6 py-3 bg-teal-500 rounded-full text-gray-900 font-semibold hover:bg-teal-400">
                View My Work
            </a>
        </section>
    )
}

export default Banner