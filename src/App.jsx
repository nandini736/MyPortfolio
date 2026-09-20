import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
    <CustomCursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Journey/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App