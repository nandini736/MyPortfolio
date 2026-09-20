import './Navbar.css'
import { useState, useEffect } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0

      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <nav className="navbar">

      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="nav-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          &lt;Nandini Kopparapu /&gt;
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

          <a
            href="#home"
            className={activeSection === 'home' ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#journey"
            className={activeSection === 'journey' ? 'active' : ''}
            onClick={closeMenu}
          >
            Journey
          </a>

          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={closeMenu}
          >
            Contact
          </a>

          <a
            href="#resume"
            className="resume-btn"
            onClick={closeMenu}
          >
            Resume
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar