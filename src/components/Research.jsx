import React from 'react'
import { AiOutlineFileText } from "react-icons/ai";

const Research = () => {
    return (


        <section id="research" className="px-8 py-20 bg-gray-900">
            <div className="max-w-5xl mx-auto">

                <h3 className="text-3xl font-bold mb-10 text-teal-400">
                    Research & Publications
                </h3>

                <div className="bg-gray-800 hover:scale-105 p-6 rounded-2xl shadow-lg hover:shadow-teal-500/20 transition duration-300">

                    <h4 className="text-xl font-semibold text-white leading-snug flex items-center gap-3">
                        <AiOutlineFileText className='text-teal-400 animate-bounce size-6' />
                        Q2 Journal Publication (Elsevier, Data in Brief)
                    </h4>

                    <p className="text-gray-300 mt-3">
                        <span className="font-medium">Title:</span>{" "}
                        <em>
                            An extensive real-world in-field tomato image dataset involving
                            maturity classification and recognition of fresh and defect
                            tomatoes
                        </em>
                    </p>

                    <p className="text-sm text-gray-400 mt-2">
                        Journal: Data in Brief (Elsevier) · Quartile: Q2
                    </p>

                    <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            Contributed to real-world image data collection and dataset preparation.
                        </li>
                        <li>
                            Performed data preprocessing and annotation for maturity classification.
                        </li>
                        <li>
                            Applied pre-trained deep learning models to evaluate classification accuracy.
                        </li>
                        <li>
                            Published the dataset to support agricultural computer vision research.
                        </li>
                    </ul>

                    <a
                        href="https://www.sciencedirect.com/science/article/pii/S2352340923007679"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 px-5 py-2 border border-teal-400
                       text-teal-400 rounded-xl hover:bg-teal-400
                       hover:text-black transition"
                    >
                        View Publication
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Research