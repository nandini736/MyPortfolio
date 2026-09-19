import './Projects.css'
import { useState } from 'react'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = [
    'All',
    'Professional Work',
    'Web Application',
    'Academic'
  ]

  const projects = [
    {
      number: '01',
      title: 'HR Management System',
      type: 'Professional Work',
      role: 'Full Stack Developer',
      description:
        'A web-based HR management application for managing employee attendance, leave, and salary information through a responsive and user-friendly interface.',
      technologies: [
        'React.js',
        'JavaScript',
        'Spring Boot',
        'REST APIs',
        'Database'
      ],
      github: null,
      demo: null
    },
    {
      number: '02',
      title: 'Client Management System',
      type: 'Web Application',
      role: 'Developer',
      description:
        'A web application designed to organize and manage client information through a structured and user-friendly interface.',
      technologies: [
        'HTML',
        'JavaScript',
        'PHP',
        'MySQL'
      ],
      github: null,
      demo: null
    },
    {
      number: '03',
      title: 'Smart Healthcare Diagnosis System',
      type: 'Academic Project',
      role: 'Developer',
      description:
        'A healthcare-focused academic project designed around patient information and a structured diagnosis workflow.',
      technologies: [
        'Healthcare',
        'Web Application',
        'Academic Project'
      ],
      github: null,
      demo: null
    },
    {
      number: '04',
      title: 'Federated Learning for COVID-19 Detection',
      type: 'Academic / Research',
      role: 'Academic Project',
      description:
        'An academic project exploring privacy-focused distributed learning for healthcare data.',
      technologies: [
        'Healthcare',
        'Data Privacy',
        'Distributed Learning'
      ],
      github: null,
      demo: null
    }
  ]

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(project => {
          if (activeFilter === 'Academic') {
            return (
              project.type === 'Academic Project' ||
              project.type === 'Academic / Research'
            )
          }

          return project.type === activeFilter
        })

  return (
    <section className="projects-section" id="projects">

      {/* Header */}

      <div className="projects-header">

        <span className="projects-label">
          PROJECTS
        </span>

        <h2>
          Projects & Experiments
        </h2>

        <p>
          Selected work from my professional experience,
          web applications, and academic projects.
        </p>

      </div>


      {/* Filters */}

      <div className="projects-filters">

        {filters.map(filter => (
          <button
            key={filter}
            className={
              activeFilter === filter
                ? 'active'
                : ''
            }
            onClick={() =>
              setActiveFilter(filter)
            }
          >
            {filter}
          </button>
        ))}

      </div>


      {/* Projects List */}

      <div className="projects-list">

        {filteredProjects.map(project => (

          <article
            className="project-row"
            key={project.number}
          >

            {/* Project Number */}

            <div className="project-number">
              {project.number}
            </div>


            {/* Main Project Content */}

            <div className="project-main">

              <div className="project-meta">

                <span className="project-type">
                  {project.type}
                </span>

                <span className="project-role">
                  {project.role}
                </span>

              </div>


              <h3>
                {project.title}
              </h3>


              <p className="project-description">
                {project.description}
              </p>


              <div className="project-technologies">

                {project.technologies.map(
                  (technology, index) => (
                    <span key={index}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </div>


            {/* Project GitHub Action */}

            <div className="project-side">

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub />
                </a>
              ) : (
                <span
                  className="project-link disabled"
                  aria-hidden="true"
                >
                  <FaArrowUpRightFromSquare />
                </span>
              )}

            </div>

          </article>

        ))}

      </div>


      {/* GitHub Profile */}

      <div className="github-profile">

        <p>
          Explore more of my work and repositories
        </p>

        <a
          href="YOUR_GITHUB_PROFILE_LINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          GitHub Profile
          <FaArrowUpRightFromSquare />
        </a>

      </div>

    </section>
  )
}

export default Projects