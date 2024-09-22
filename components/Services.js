import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPaintBrush, faMobileAlt, faBanner } from '@fortawesome/free-solid-svg-icons'; // Import icons
import styles from './services.module.css'; // Import the custom stylesheet

const Services = () => {
  return (
    <section className={styles.ftcoSection} id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className={`${styles.headingSection} col-md-12 text-center mb-5`}>
            <span className="subheading" style={{ color: '#B1B493' }}>I am great at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p style={{ color: '#B1B493' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row">
          {/* Web Design */}
          <div className="col-md-6 col-lg-3">
            <div className={`${styles.cardContainer} media block-6 services d-block rounded-lg shadow`}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faPaintBrush} className={styles.icon} />
              </div>
              <div className="media-body">
                <h3 className="heading">Web Design</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="col-md-6 col-lg-3">
            <div className={`${styles.cardContainer} media block-6 services d-block rounded-lg shadow`}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
              </div>
              <div className="media-body">
                <h3 className="heading">Web Development</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Web Application */}
          <div className="col-md-6 col-lg-3">
            <div className={`${styles.cardContainer} media block-6 services d-block rounded-lg shadow`}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
              </div>
              <div className="media-body">
                <h3 className="heading">Web Application</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Banner Design */}
          <div className="col-md-6 col-lg-3">
            <div className={`${styles.cardContainer} media block-6 services d-block rounded-lg shadow`}>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faBanner} className={styles.icon} />
              </div>
              <div className="media-body">
                <h3 className="heading">Banner Design</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>
          </div>

          {/* Add more service cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default Services;
