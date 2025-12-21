import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="px-8 py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-teal-400">Contact</h3>
                <form className="grid gap-6">
                    <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800 border border-gray-700" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800 border border-gray-700" />
                    <textarea placeholder="Your Message" rows="4" className="p-3 rounded bg-gray-800 border border-gray-700"></textarea>
                    <button className="px-6 py-3 bg-teal-500 rounded font-semibold text-gray-900 hover:bg-teal-400">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact