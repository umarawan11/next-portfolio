import React from 'react';
import styles from './Contact.module.css'; // Import the CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Import the up arrow icon

const ContactSection = () => {

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles['ftco-section']} id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className={`col-md-7 ${styles['heading-section']} text-center`}>
            <span className={styles['subheading']}>Contact us</span>
            <h2 className="mb-4">Have a Project?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row block-9">
          <div className="col-md-8">
            <form className={`bg-light p-4 p-md-5 ${styles['contact-form']}`}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" value="Send Message" className={`btn py-3 px-5 ${styles['btn']}`} />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4 d-flex pl-md-5">
            <div className="row">
              <div className={`dbox w-100 d-flex ${styles['dbox']}`}>
                <div className={styles['icon']}>
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className={styles['text']}>
                  <p><span>Adress:</span><a href="">AECHS Isb street 2</a></p>
                </div>
              </div>
              <div className={`dbox w-100 d-flex ${styles['dbox']}`}>
                <div className={styles['icon']}>
                  <span className="fa fa-phone"></span>
                </div>
                <div className={styles['text']}>
                  <p><span>Phone:</span> <a href="tel:+1235235598">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className={`dbox w-100 d-flex ${styles['dbox']}`}>
                <div className={styles['icon']}>
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className={styles['text']}>
                  <p><span>Email:</span> <a href="mailto:youremail@example.com">youremail@example.com</a></p>
                </div>
              </div>
              <div className={`dbox w-100 d-flex ${styles['dbox']}`}>
                <div className={styles['icon']}>
                  <span className="fa fa-globe"></span>
                </div>
                <div className={styles['text']}>
                  <p><span>Website:</span> <a href="https://yoursite.com">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Icon */}
      <div className={styles['scroll-to-top']} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} size="2x" />
      </div>
    </section>
  );
};

export default ContactSection;
