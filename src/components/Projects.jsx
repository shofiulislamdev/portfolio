import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: "Postman",
            description:
                "A realtime chat application using React, Firebase Authentication, Realtime Database and Tailwind CSS.",
        },
        {
            title: "Number Guessing Game",
            description:
                "First, Player One will enter his name, and then the game will start. After that, Player One will choose a number. Next, Player Two will enter his name and try to guess the number chosen by Player One. If Player Two guesses the correct number, Player Two will win. If the guess is incorrect, Player One will win. Player Two will have a total of five chances to guess Player One’s number.",
        },

        {
            title: "Postman",
            description:
                "A realtime chat application using React, Firebase Authentication, Realtime Database and Tailwind CSS.",
        },
    ];

    return (
        <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-teal-400">Projects</h3>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:shadow-teal-500/20 transition"
                    >
                        <h4 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h4>

                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>

                        <a
                            href="#"
                            className="text-teal-400 hover:underline text-sm"
                        >
                            View Details
                        </a>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Projects