import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <>
      {/* Projects Section */}
      <section className={`ftco-section ftco-project ${styles.ftcoSection}`} id="projects-section">
        <div className="container-fluid px-md-4">
          <div className="row justify-content-center pb-5">
            <div className={`col-md-12 heading-section text-center ftco-animate ${styles.headingSection}`}>
              <span className={`subheading ${styles.subheading}`}>Accomplishments</span>
              <h2 className="mb-4">Our Projects</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>

          <div className="row">
            {/* Project 1 */}
            <div className="col-md-3">
              <div className={`${styles.project} img shadow ftco-animate d-flex justify-content-center align-items-center`} style={{ backgroundImage: `url('/images/work-1.jpg')` }}>
                <div className={`${styles.overlay}`}></div>
                <div className={`${styles.text} text-center p-4`}>
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-3">
              <div className={`${styles.project} img shadow ftco-animate d-flex justify-content-center align-items-center`} style={{ backgroundImage: `url('/images/work-2.jpg')` }}>
                <div className={`${styles.overlay}`}></div>
                <div className={`${styles.text} text-center p-4`}>
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-3">
              <div className={`${styles.project} img shadow ftco-animate d-flex justify-content-center align-items-center`} style={{ backgroundImage: `url('/images/work-2.jpg')` }}>
                <div className={`${styles.overlay}`}></div>
                <div className={`${styles.text} text-center p-4`}>
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="col-md-3">
              <div className={`${styles.project} img shadow ftco-animate d-flex justify-content-center align-items-center`} style={{ backgroundImage: `url('/images/work-2.jpg')` }}>
                <div className={`${styles.overlay}`}></div>
                <div className={`${styles.text} text-center p-4`}>
                  <h3><a href="#">Branding &amp; Illustration Design</a></h3>
                  <span>Web Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
