import React from 'react'
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
    const certifications = [
        {
            title: "In Recognition of Scholarly Publication in Reputed indexed Journals",
            organization: "Elsevier - Data in Brief (Q2 Journal)",
            year: "2024",
            description:
                "Published a real-world tomato image dataset for maturity classification and defect detection using computer vision techniques. the year of 2023 has been awarded to me, by the Department of Computer Science & Engineering. Which is organized by Daffodil International University on 2023",
            link: "https://drive.google.com/file/d/1vlhGr_4Gf_qH54602pGNnMOxRHpzwmEH/view?usp=sharing",
        },
        {
            title: "Thinking in Object-Oriented Programming: Basic Concept",
            organization: "goedu",
            year: "2022",
            description:
                "Learned core OOP concepts including encapsulation, inheritance, polymorphism, and abstraction with real-world programming examples.",
            link: "https://drive.google.com/file/d/14ICivQhWqWumXtvwOVmISxAKlJRd9bjX/view?usp=sharing",
        },
        {
            title: "How to develop android application part -1",
            organization: "INTERNATIONAL ONLINE UNIVERSITY",
            year: "2022",
            description:
                "Built Android applications using Java, focusing on UI design, activity lifecycle, and basic backend integration.",
            link: "https://drive.google.com/file/d/1WCx_xN2_ciOfcyqmiOVrY2JQ2THNaHM5/view?usp=sharing",
        },
        {
            title: "Getting started with Microsoft Word",
            organization: "coursera",
            year: "2024",
            description: "Completed a hands-on guided project on Microsoft Word via Coursera Project Network, focusing on professional document creation, formatting, styles, headings, tables, and page layout techniques used in academic and corporate environments.",
            link: "https://drive.google.com/file/d/1z1tzT8kk-69UYivUdbB3TelQ6V37ZcV4/view?usp=sharing"

        },
        
    ];
    return (
        <section id="certifications" className="max-w-6xl mx-auto px-8 py-20">
            <h2 className="text-3xl font-bold mb-12 text-teal-400">
                Certifications & Training
            </h2>


            <div className="grid md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 rounded-2xl p-6 hover:scale-105 shadow-lg hover:shadow-teal-500/20 transition duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="text-teal-400" />
                            <h3 className="text-xl font-semibold">{cert.title}</h3>
                        </div>


                        <p className="text-sm text-gray-500 mb-2">
                            {cert.organization} • {cert.year}
                        </p>


                        <p className="text-gray-400 text-justify leading-relaxed mb-4">
                            {cert.description}
                        </p>


                        {cert.link && (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-teal-400 hover:underline"
                            >
                                View Certificate <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certifications