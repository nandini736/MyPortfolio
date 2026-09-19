import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="nav-container">

        <div className="logo">
          &lt;Nandini Kopparapu /&gt;
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Journey</a>
          <a href="#contact">Contact</a>

          <a href="#resume" className="resume-btn">
            Resume
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar