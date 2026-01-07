import React from 'react'
import pic from "../assets/shofiul.jpg"

const About = () => {
    return (
        <div className='bg-gray-900'>
            <section id="about" className="px-8 py-20 max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-teal-400">About Me</h3>

                <div className='flex justify-between items-center'>
                    <p className="text-gray-300 leading-relaxed w-[678px] text-justify">
                        {/* I am a Computer Science & Engineering graduate with experience in MERN stack development,
                        To establish myself as a MERN Stack Developer in local, international, and multinational organizations by
                        delivering value through scalable web applications, problem-solving, and innovative solutions. I aim to
                        become a Senior Full Stack Developer within the next 4-5 years. Motivated Computer Engineer with
                        expertise in data preprocessing, and applied research. Experienced in teamwork, problem-solving, and
                        organizing technical and cultural events. Seeking an opportunity to contribute as a Web Developer while
                        pursuing research in computer science. */}



                        {/* 👋 I'm Shofiul—fresh CSE graduated, night-owl coder, and the guy who built a tomato-sorting AI 🌱 and a real-time chat app 💬.

                        I spend most days in the MERN world—MongoDB, Express, React, Node—writing code that is clear, test-friendly, and ready to scale. My GitHub shows 20+ commits a week; highlights include:• Chatting App (socket.io + JWT) 🔗• Password Generator ⚙️• Full-stack “Petroil” dashboard ⛽

                        Research also keeps me sharp. A Q2-journal paper on tomato maturity detection taught me the value of clean data ➜ better models ➜ happy users.

                        What I bring to a team:💻 Strong JavaScript & React foundations🛠️ REST API design with Node/Express📊 MongoDB & MySQL for data you can trust🎨 A good eye for UI, thanks to Tailwind & Figma🤝 Soft skills—clear writing, calm under deadlines, and a knack for guiding juniors (ex-exec member, DIU Programming Club).

                        Goal? In five years: senior full-stack engineer leading products that make life a bit easier. Until then, I'm learning every single day—currently deepening TypeScript & Docker.

                        Let's swap ideas or code reviews. Check my portfolio (link in bio) or ping me right here—always open to new projects and good coffee chats ☕. */}





                        👋 Hi, I’m Shofiul, a fresh CSE graduate and MERN stack developer. I work with MongoDB, Express, React, and Node.js, building scalable, clean, and test-friendly applications. My projects include a real-time chat app 💬, a password generator ⚙️, and a full-stack “Petroil” dashboard.

                        I also have a Q2 journal publication on tomato maturity 🌱 detection, which strengthened my skills in data quality and model accuracy. Alongside strong JavaScript & React fundamentals, I bring experience with REST APIs, MongoDB & MySQL, and UI design using Tailwind CSS.

                        Previously, I served as an Executive Member of the DIU Computer Programming Club, mentoring juniors and working in team-driven environments. I’m currently learning TypeScript and Docker, with a long-term goal of becoming a senior full-stack engineer building impactful products.
                    </p>

                    <div className='bg-teal-400 rounded-[5%]'>
                        <img className='h-[250px] w-[200px] rounded-[5%] border-0 transform transition-transform duration-300 ease-in-out hover:scale-105 animate-float' src={pic} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About