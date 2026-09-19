import './Skills.css'
import { useState } from 'react'

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa'

import {
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiTypescript,
  SiVite
} from 'react-icons/si'


function Skills() {

  const [activeFilter, setActiveFilter] = useState('All')


  const skills = [
    {
      name: 'Java',
      category: 'Languages',
      level: 'Proficient',
      description: 'Object-oriented programming and backend development',
      icon: <FaJava />
    },

    {
      name: 'JavaScript',
      category: 'Languages',
      level: 'Proficient',
      description: 'Interactive and dynamic web experiences',
      icon: <SiJavascript />
    },

    {
      name: 'React.js',
      category: 'Frontend',
      level: 'Proficient',
      description: 'Component-based modern UI development',
      icon: <FaReact />
    },

    {
      name: 'HTML',
      category: 'Frontend',
      level: 'Proficient',
      description: 'Semantic and structured web pages',
      icon: <FaHtml5 />
    },

    {
      name: 'CSS',
      category: 'Frontend',
      level: 'Proficient',
      description: 'Responsive layouts and modern UI styling',
      icon: <FaCss3Alt />
    },

    {
      name: 'Spring Boot',
      category: 'Backend',
      level: 'Proficient',
      description: 'REST APIs and backend application development',
      icon: <SiSpringboot />
    },

    {
      name: 'REST APIs',
      category: 'Backend',
      level: 'Proficient',
      description: 'Connecting frontend and backend services',
      icon: 'API'
    },

    {
      name: 'MySQL',
      category: 'Database',
      level: 'Proficient',
      description: 'Relational database management and SQL',
      icon: <SiMysql />
    },

    {
      name: 'Git',
      category: 'Tools',
      level: 'Proficient',
      description: 'Version control and project collaboration',
      icon: <FaGitAlt />
    },

    {
      name: 'GitHub',
      category: 'Tools',
      level: 'Proficient',
      description: 'Code hosting and repository management',
      icon: <FaGithub />
    },

    {
      name: 'Vite',
      category: 'Tools',
      level: 'Proficient',
      description: 'Fast and modern frontend development',
      icon: <SiVite />
    },

    {
      name: 'TypeScript',
      category: 'Languages',
      level: 'Fresher',
      description: 'Exploring type-safe JavaScript development',
      icon: <SiTypescript />
    }
  ]


  const filteredSkills =
    activeFilter === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeFilter)


  const categoryCount =
    new Set(skills.map(skill => skill.category)).size


  return (

    <section className="skills-section" id="skills">

      {/* ================================
          SECTION HEADER
      ================================= */}

      <div className="skills-header">

        <span className="skills-label">
          MY SKILLS
        </span>

        <h2>
          Skills & Technologies
        </h2>

        <p>
          Technologies I use to build modern and responsive
          web applications.
        </p>

      </div>


      {/* ================================
          TECHNICAL STACK SPOTLIGHT
      ================================= */}

      <div className="skills-spotlight">

        <div className="spotlight-content">

          <span className="spotlight-label">
            TECHNICAL STACK
          </span>

          <h3>
            Building with Java, React & Spring Boot
          </h3>

          <p>
            I build modern web applications by combining
            responsive frontend interfaces with reliable
            backend systems and database solutions.
          </p>

        </div>


        <div className="spotlight-stats">

          <div className="spotlight-stat">

            <strong>
              {skills.length}
            </strong>

            <span>
              Technologies
            </span>

          </div>


          <div className="spotlight-stat">

            <strong>
              {categoryCount}
            </strong>

            <span>
              Categories
            </span>

          </div>

        </div>

      </div>


      {/* ================================
          SKILLS CONTENT
      ================================= */}

      <div className="skills-content">

        {/* Filter Buttons */}

        <div className="skills-filters">

          <button
            className={activeFilter === 'All' ? 'active' : ''}
            onClick={() => setActiveFilter('All')}
          >
            All
          </button>

          <button
            className={activeFilter === 'Frontend' ? 'active' : ''}
            onClick={() => setActiveFilter('Frontend')}
          >
            Frontend
          </button>

          <button
            className={activeFilter === 'Backend' ? 'active' : ''}
            onClick={() => setActiveFilter('Backend')}
          >
            Backend
          </button>

          <button
            className={activeFilter === 'Database' ? 'active' : ''}
            onClick={() => setActiveFilter('Database')}
          >
            Database
          </button>

          <button
            className={activeFilter === 'Languages' ? 'active' : ''}
            onClick={() => setActiveFilter('Languages')}
          >
            Languages
          </button>

          <button
            className={activeFilter === 'Tools' ? 'active' : ''}
            onClick={() => setActiveFilter('Tools')}
          >
            Tools
          </button>

        </div>


        {/* Skills Grid */}

        <div className="skills-grid">

          {filteredSkills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>


              <div className="skill-info">

                <h3>
                  {skill.name}
                </h3>

                <span>
                  {skill.level}
                </span>

              </div>


              <div className="skill-category">
                {skill.category}
              </div>


              <p>
                {skill.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}


export default Skills