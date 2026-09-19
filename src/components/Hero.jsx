import './Hero.css'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useEffect, useState } from 'react'

function Hero() {
const roles = [
'Full Stack Developer',
'React Developer',
'Java Developer',
'Software Engineer'
]

const [roleIndex, setRoleIndex] = useState(0)
const [displayText, setDisplayText] = useState('')
const [isDeleting, setIsDeleting] = useState(false)

useEffect(() => {
const currentRole = roles[roleIndex]
const typingSpeed = isDeleting ? 60 : 100

const timer = setTimeout(() => {
  if (!isDeleting) {
    setDisplayText(
      currentRole.substring(0, displayText.length + 1)
    )

    if (displayText.length === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000)
    }
  } else {
    setDisplayText(
      currentRole.substring(0, displayText.length - 1)
    )

    if (displayText.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
  }
}, typingSpeed)

return () => clearTimeout(timer)

}, [displayText, isDeleting, roleIndex])

return ( <section id="home" className="hero-section">

  {/* LEFT SIDE */}

  <div className="hero-content">

    <div className="availability">
      <span className="availability-dot"></span>
      Open to Full-Time Opportunities
    </div>

    <h1>
      Hi, I'm Nandini K 👋
    </h1>

    <h2 className="hero-role">
      I am{' '}
      <span className="role-text">
        {displayText}
      </span>
      <span className="typing-cursor">|</span>
    </h2>

    <p className="hero-description">
      I build modern, responsive and user-friendly web applications
      using Java, React.js, Spring Boot and MySQL. I enjoy turning
      ideas into clean and functional digital experiences.
    </p>

    <div className="hero-actions">

      <a href="#projects" className="primary-btn">
        View Projects
      </a>

      <a href="#contact" className="secondary-btn">
        Contact Me
      </a>

      <div className="social-links">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

      </div>

    </div>

  </div>


  {/* RIGHT SIDE */}

  <div className="hero-visual">

    <div className="code-card">

      <div className="code-header">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="code-body">

        <p>
          <span className="code-key">name:</span> "Nandini",
        </p>

        <p>
          <span className="code-key">focus:</span> "Building ideas",
        </p>

        <p>
          <span className="code-key">status:</span>{' '}
          <span className="status-value">
            "Available"
          </span>,
        </p>

        <p>
          <span className="code-key">mindset:</span> "Always learning"
        </p>

      </div>

    </div>

  </div>


  {/* HERO STATS */}

  <div className="hero-stats">

    <div className="stat-card">
      <div className="stat-value">8.65</div>
      <div className="stat-label">CGPA</div>
    </div>

    <div className="stat-card">
      <div className="stat-value">7+</div>
      <div className="stat-label">PROJECTS BUILT</div>
    </div>

    <div className="stat-card">
      <div className="stat-value">2025</div>
      <div className="stat-label">M.TECH GRADUATE</div>
    </div>

    <div className="stat-card">
        <div className="stat-value">1+</div>
        <div className="stat-label">YEAR EXPERIENCE</div>
    </div>

  </div>

</section>
)
}

export default Hero
