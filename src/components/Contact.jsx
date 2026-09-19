import './Contact.css'
import { useState } from 'react'
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaArrowUpRightFromSquare
} from 'react-icons/fa6'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSending(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setStatus('Message sent successfully!')

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus(result.message || 'Failed to send message.')
      }

    } catch (error) {
      setStatus('Something went wrong. Please try again.')
    }

    setIsSending(false)
  }

  return (
    <section className="contact-section" id="contact">

      <div className="contact-header">
        <span className="contact-label">
          GET IN TOUCH
        </span>

        <h2>
          Let's Build Something Together
        </h2>

        <p>
          Have a project idea, opportunity, or just want to
          connect? Feel free to reach out. I'm always open to
          discussing new opportunities and interesting ideas.
        </p>
      </div>

      <div className="contact-content">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <div className="contact-intro">
            <span className="contact-small-label">
              CONTACT
            </span>

            <h3>
              Let's start a conversation.
            </h3>

            <p>
              Whether you're looking for a developer, have an
              opportunity to discuss, or simply want to connect,
              you can reach me through the options below.
            </p>
          </div>

          <div className="contact-links">

            <a
              href="mailto:nandukopparapu312@gmail.com"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaEnvelope />
              </span>

              <span className="contact-link-content">
                <small>Email</small>
                <strong>
                  nandukopparapu312@gmail.com
                </strong>
              </span>

              <FaArrowUpRightFromSquare className="contact-link-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/nandini-kopparapu/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaLinkedinIn />
              </span>

              <span className="contact-link-content">
                <small>LinkedIn</small>
                <strong>
                  Connect with me
                </strong>
              </span>

              <FaArrowUpRightFromSquare className="contact-link-arrow" />
            </a>

            <a
              href="https://github.com/nandini736"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-icon">
                <FaGithub />
              </span>

              <span className="contact-link-content">
                <small>GitHub</small>
                <strong>
                  Explore my repositories
                </strong>
              </span>

              <FaArrowUpRightFromSquare className="contact-link-arrow" />
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="subject">
              Subject
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What would you like to discuss?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell me a little about your project or idea..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}

            <FaArrowUpRightFromSquare />
          </button>

          {status && (
            <p className="contact-status">
              {status}
            </p>
          )}

        </form>

      </div>

    </section>
  )
}

export default Contact