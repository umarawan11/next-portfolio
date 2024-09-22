// components/CounterSection.js
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUsers, faMugHot, faClock } from '@fortawesome/free-solid-svg-icons'; // Changed icons
import styles from './CounterSection.module.css';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

const CounterSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const speed = 200; // Change animation speed here
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <section className={`${styles.ftcoCounter} ${styles.img} ${styles.bgLight}`} id="section-counter">
      <div className="container">
        <div className="row">
          <div className={`col-md-3 justify-content-center counter-wrap ${styles.ftcoAnimate}`}>
            <div className="block-18 d-flex">
              <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                <FontAwesomeIcon icon={faSuitcase} /> {/* Best suited icon for Project Complete */}
              </div>
              <div className="text">
                <div className="items">
                <strong className="counter" data-target="750">0</strong></div>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>

          <div className={`col-md-3 justify-content-center counter-wrap ${styles.ftcoAnimate}`}>
            <div className="block-18 d-flex">
              <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                <FontAwesomeIcon icon={faUsers} /> {/* Best suited icon for Happy Clients */}
              </div>
              <div className="text">
              <div className="items">
                <strong className="counter" data-target="568">0</strong>
                </div>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>

          <div className={`col-md-3 justify-content-center counter-wrap ${styles.ftcoAnimate}`}>
            <div className="block-18 d-flex">
              <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                <FontAwesomeIcon icon={faMugHot} /> {/* Best suited icon for Cups of Coffee */}
              </div>
              <div className="text">
              <div className="items">
                <strong className="counter" data-target="478">0</strong>
                </div>
                <span>Cups of Coffee</span>
              </div>
            </div>
          </div>
          
          <div className={`col-md-3 justify-content-center counter-wrap ${styles.ftcoAnimate}`}>
            <div className="block-18 d-flex">
              <div className={`${styles.icon} d-flex justify-content-center align-items-center`}>
                <FontAwesomeIcon icon={faClock} /> {/* Best suited icon for Years of Experience */}
              </div>
              <div className="text">
              <div className="items">
                <strong className="counter" data-target="25">0</strong> {/* Adjusted data-target for Years of Experience */}
                </div>
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

