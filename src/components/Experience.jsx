import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineAssignmentInd } from "react-icons/md";


const Experience = () => {
    return (
        <div>
            <section id="experience" className="px-8 py-20 bg-gray-900">
                <div className="max-w-5xl mx-auto">

                    <h3 className="text-3xl font-bold mb-10 text-teal-400">
                        Experience
                    </h3>

                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 hover:scale-105 duration-300 transition">

                        <h4 className="text-xl font-semibold text-white flex items-center gap-3">
                            <FaLaptopCode className='text-teal-400 animate-bounce size-6' />
                            Lab Prefect - Database Management System Lab (DBMS)
                        </h4>

                        <p className="text-teal-400 font-medium mt-1">
                            Daffodil International University
                        </p>

                        <p className="text-sm text-gray-400 mt-1">
                            January 10, 2023 – June 20, 2023 (6 Months)
                        </p>

                        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                Assisted students during Database Management System (DBMS) lab sessions.
                            </li>
                            <li>
                                Helped students understand SQL queries, database design, and normalization.
                            </li>
                            <li>
                                Maintained lab environment and ensured smooth execution of lab classes.
                            </li>
                            <li>
                                Coordinated with course instructors to support lab activities.
                            </li>
                        </ul>

                        <div className='mt-3'>
                            <a href="https://drive.google.com/file/d/1iZLpRLmHeoCAm9m1KhJm7vMdq3usImvX/view?usp=sharing" target='_blank' rel="noopener noreferrer" className='text-teal-400 hover:underline text-sm inline-flex items-center border border-teal-400 p-2 rounded-2xl hover:bg-teal-400 hover:text-black'>View Reference Letter <FiExternalLink className='ml-2' /></a>
                        </div>
                    </div>


                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 transition hover:scale-105 mt-10 duration-300">
                        <h4 className="text-xl font-semibold text-white flex items-center gap-3">
                            <MdOutlineAssignmentInd className='text-teal-400 animate-bounce text-2xl' />
                            Executive Member – Computer Programming Club (CPC)
                        </h4>

                        <p className="text-teal-400 font-medium mt-1">
                            Daffodil International University
                        </p>

                        <p className="text-sm text-gray-400 mt-1">
                            July 1, 2020 - December 31, 2020 (6 Months)
                        </p>

                        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                            <li>Actively participated in programming workshops and coding events.</li>
                            <li>Assisted in organizing competitive programming sessions and seminars.</li>
                            <li>Collaborated with team members to promote programming culture.</li>
                            <li>Mentored junior students in basic programming concepts.</li>
                        </ul>
                    </div>

                </div>



            </section>
        </div>
    )
}

export default Experience