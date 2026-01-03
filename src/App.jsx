import About from "./components/About"
import Banner from "./components/Banner"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Research from "./components/Research"
import Skill from "./components/Skill"

function App() {


  return (
    <>
      <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Education></Education>
        <Skill></Skill>
        <Projects></Projects>
        <Research></Research>
        <Certifications></Certifications>
        <Contact></Contact>
        <Footer></Footer>

      </div>
      
    </>
  )
}

export default App
