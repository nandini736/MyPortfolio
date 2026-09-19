import './About.css'

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* =========================
            LEFT SIDE - STICKY
            ========================= */}

        <div className="about-intro">

          <div className="about-label">
            OVERVIEW
          </div>

          <h2>
            Building with purpose,
            <br />
            learning with curiosity.
          </h2>

          <p>
            I’m a software developer who enjoys turning ideas into
            practical and meaningful digital experiences. I like
            understanding how things work, solving problems step by
            step, and continuously improving the way I build.
          </p>

          <p>
            I believe good software is not only about writing code.
            It is also about teamwork, adaptability, attention to
            detail, and creating solutions that are simple and useful.
          </p>

          <div className="about-tags">
            <span>Problem Solving</span>
            <span>Teamwork</span>
            <span>Learning</span>
          </div>

        </div>


        {/* =========================
            RIGHT SIDE - SCROLLING
            ========================= */}

        <div className="about-details">

          {/* Main Card */}

          <div className="about-main-card">

            <span className="about-card-label">
              MY APPROACH
            </span>

            <h3>
              I enjoy turning challenges into clean,
              practical solutions.
            </h3>

            <p>
              My approach is to understand the problem first,
              break it into smaller parts, and then build a
              solution that is reliable and easy to maintain.
              I’m comfortable learning new concepts when a
              project requires them and I enjoy working with
              others to achieve a common goal.
            </p>

          </div>


          {/* Feature Cards */}

          <div className="about-feature-grid">

            <div className="about-feature-card">

              <div className="feature-icon">
                &lt;/&gt;
              </div>

              <h4>
                Clean Development
              </h4>

              <p>
                Focused on writing organized and maintainable code.
              </p>

            </div>


            <div className="about-feature-card">

              <div className="feature-icon">
                ↗
              </div>

              <h4>
                Continuous Growth
              </h4>

              <p>
                Always exploring better ways to learn and build.
              </p>

            </div>


            <div className="about-feature-card">

              <div className="feature-icon">
                ✦
              </div>

              <h4>
                Problem Solving
              </h4>

              <p>
                Breaking complex problems into simple solutions.
              </p>

            </div>


            <div className="about-feature-card">

              <div className="feature-icon">
                ◎
              </div>

              <h4>
                Teamwork
              </h4>

              <p>
                Collaborating, sharing ideas, and helping the team grow.
              </p>

            </div>


            {/* Additional card to create the scrolling length */}

            <div className="about-feature-card">

              <div className="feature-icon">
                ◇
              </div>

              <h4>
                Attention to Detail
              </h4>

              <p>
                Paying attention to both functionality and the overall
                user experience.
              </p>

            </div>


            <div className="about-feature-card">

              <div className="feature-icon">
                +
              </div>

              <h4>
                Adaptability
              </h4>

              <p>
                Comfortable adapting to new requirements, tools,
                and development challenges.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About