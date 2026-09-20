import './Footer.css'
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaArrowUpRightFromSquare
} from 'react-icons/fa6'

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="footer-section">

      <div className="footer-content">

        {/* SECTION 1 — BRAND */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            &lt;Nandini Kopparapu/&gt;
          </a>

          <p className="footer-description">
            Building modern, responsive and user-friendly
            web experiences with Java, React.js and
            Spring Boot.
          </p>

          <span className="footer-signature">
            — Nandini K
          </span>

        </div>

        {/* SECTION 2 — QUICK LINKS */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <nav>
            {quickLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </nav>

        </div>

        {/* SECTION 3 — CONNECT */}

        <div className="footer-connect">

          <h3>
            Connect
          </h3>

          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/nandini-kopparapu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
              <FaArrowUpRightFromSquare />
            </a>

            <a
              href="https://github.com/nandini736"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
              <span>GitHub</span>
              <FaArrowUpRightFromSquare />
            </a>

            <a
              href="mailto:nandukopparapu312@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
              <span>Email</span>
              <FaArrowUpRightFromSquare />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Nandini. All rights reserved.
        </p>

        <p>
          Built with React & Vite
        </p>

      </div>

    </footer>
  )
}

export default Footer