import React from 'react'
import pic from "../assets/shofiul.jpg"

const About = () => {
    return (
        <section id="about" className="px-8 py-20 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-teal-400">About Me</h3>

            <div className='flex justify-between'>
                <p className="text-gray-300 leading-relaxed w-[600px] text-justify">
                    I am a Computer Science & Engineering graduate with experience in MERN stack development,
                    To establish myself as a MERN Stack Developer in local, international, and multinational organizations by
                    delivering value through scalable web applications, problem-solving, and innovative solutions. I aim to
                    become a Senior Full Stack Developer within the next 4-5 years. Motivated Computer Engineer with
                    expertise in data preprocessing, and applied research. Experienced in teamwork, problem-solving, and
                    organizing technical and cultural events. Seeking an opportunity to contribute as a Web Developer while
                    pursuing research in computer science.
                </p>

                <div>
                    <img className='h-[200px] w-[150px] rounded-[50%] border-4' src={pic} alt="" />
                </div>
            </div>
        </section>
    )
}

export default About