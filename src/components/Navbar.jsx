import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md fixed w-full z-50">
        <h1 className="text-xl font-bold text-teal-400">Md. Shofiul Islam</h1>
        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#education" className="hover:text-teal-400">Education</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#research" className="hover:text-teal-400">Research & Publications</a></li>
          <li><a href="#certifications" className='hover:text-teal-400'>Certifications & Training</a></li>
          <li><a href="#experience" className='hover:text-teal-400'>Experience</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar