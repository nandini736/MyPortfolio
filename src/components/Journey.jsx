import './Journey.css'
import { useEffect, useRef } from 'react'
import {
  FaBriefcase,
  FaGraduationCap,
  FaSchool
} from 'react-icons/fa'

function Journey() {
  const timelineRef = useRef(null)

  const journey = [
    {
      number: '01',
      period: 'Jun 2026 – Present',
      type: 'Professional',
      title: 'Full Stack Developer',
      organization: 'Wheeliyo',
      description:
        'Currently developing an HR Management System to manage employee attendance, leave, and salary details. Working on responsive interfaces using React.js and JavaScript, database-driven functionality, and frontend development.',
      icon: <FaBriefcase />
    },
    {
      number: '02',
      period: 'Oct 2025 – Mar 2026',
      type: 'Professional',
      title: 'Full Stack Developer Intern',
      organization: 'CodeBegun',
      description:
        'Gained hands-on experience in full-stack development using Java, Spring Boot, React.js, and MySQL. Worked with RESTful APIs, database design, and frontend-backend integration.',
      icon: <FaBriefcase />
    },
    {
      number: '03',
      period: '2020 – 2025',
      type: 'Education',
      title: 'Integrated M.Tech in Software Engineering',
      organization: 'Vellore Institute of Technology',
      description:
        'Completed an Integrated M.Tech in Software Engineering with a strong foundation in software development, programming, databases, and problem solving.',
      result: 'CGPA 8.65',
      icon: <FaGraduationCap />
    },
    {
      number: '04',
      period: '2018 – 2020',
      type: 'Education',
      title: 'Intermediate – MPC',
      organization: 'Narayana Junior College',
      description:
        'Completed Intermediate education with Mathematics, Physics and Chemistry.',
      result: 'CGPA 9.48',
      icon: <FaGraduationCap />
    },
    {
      number: '05',
      period: '2017 – 2018',
      type: 'Education',
      title: 'Secondary Education',
      organization: 'Sri Chaitanya School',
      description:
        'Completed secondary education under the Board of Secondary Education, Andhra Pradesh.',
      result: 'CGPA 9.8',
      icon: <FaSchool />
    }
  ]

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll(
      '.journey-item'
    )

    if (!items) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.2
      }
    )

    items.forEach(item => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="journey-section" id="journey">

      <div className="journey-header">
        <span className="journey-label">
          MY JOURNEY
        </span>

        <h2>
          Education & Professional Growth
        </h2>

        <p>
          A timeline of the experiences, education, and milestones
          that shaped my journey in software development.
        </p>
      </div>

      <div
        className="journey-timeline"
        ref={timelineRef}
      >

        <div className="journey-line"></div>

        {journey.map((item, index) => (
          <div
            className={`journey-item ${
              index % 2 === 0 ? 'journey-left' : 'journey-right'
            }`}
            key={item.number}
          >

            <div className="journey-content">

              <div className="journey-top">
                <span className="journey-period">
                  {item.period}
                </span>

                <span className="journey-type">
                  {item.type}
                </span>
              </div>

              <div className="journey-icon-mobile">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <h4>
                {item.organization}
              </h4>

              <p>
                {item.description}
              </p>

              {item.result && (
                <span className="journey-result">
                  {item.result}
                </span>
              )}

            </div>

            <div className="journey-node">

              <span className="journey-number">
                {item.number}
              </span>

              <span className="journey-node-icon">
                {item.icon}
              </span>

            </div>

            <div className="journey-space"></div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Journey