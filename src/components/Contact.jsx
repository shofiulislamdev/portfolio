import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
        <section id="contact" className="px-8 py-20">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-teal-400">Contact</h3>
                <p className='mb-5 text-gray-400'>Feel free to reach out for collaboration or inquiries!</p>
                <form className="grid gap-6">
                    <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 border border-gray-700" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 border border-gray-700" />
                    <textarea placeholder="Your Message" rows="4" className="p-3 rounded bg-gray-800 border border-gray-700"></textarea>
                    <button className="px-6 py-3 bg-teal-500 rounded font-semibold text-gray-900 hover:bg-teal-400">
                        Send Message
                    </button>
                </form>

                <div className='mt-10'>
                    <div className='flex items-center'>
                        <FaSquarePhone className='cursor-pointer text-teal-400 size-5'/>
                        <p className='ml-5 text-gray-400'>01734958226</p>
                    </div>

                    <div className='flex items-center'>
                        <FaWhatsappSquare className='cursor-pointer text-teal-400 size-5'/>
                        <p className='ml-5 text-gray-400'>01734958226</p>
                    </div>

                    <div className='flex items-center'>
                        <MdEmail className='cursor-pointer text-teal-400 size-5'/>
                        <p className='ml-5 text-gray-400'>shofiulislamsabbir@gmail.com</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact