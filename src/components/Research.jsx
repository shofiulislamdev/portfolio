import React from 'react'

const Research = () => {
    return (
        <section id='research' className="bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6 text-teal-400">Research & Publication</h2>
                <p className="text-gray-400">
                    Q2 Journal Publication (Elsevier, Data in Brief): "An extensive real-world in-field tomato image dataset involving maturity classification and recognition of fresh and defect tomatoes."
                </p>

                <div className='mt-8'>
                    <a href="https://www.sciencedirect.com/science/article/pii/S2352340923007679" target='_blank' className="px-4 py-1 text-sm border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-black transition">Click Here</a>
                    {/* <a href="https://github.com/shofiulislamdev" target="_blank" className="px-6 py-3 border border-gray-600 rounded-xl hover:border-teal-400">
                        GitHub
                    </a> */}
                </div>
            </div>


        </section>
    )
}

export default Research