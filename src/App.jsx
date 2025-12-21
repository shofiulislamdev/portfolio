import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skill from "./components/Skill"

function App() {


  return (
    <>
      <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skill></Skill>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>

      </div>
      
    </>
  )
}

export default App
