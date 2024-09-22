import React from 'react';
import styles from '../components/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Let's talk about</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className={`btn ${styles.learnMoreBtn}`}>Learn more</a>
              </p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Home</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>About</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Services</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Projects</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Web Design</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Web Development</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Business Strategy</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Data Analysis</a></li>
                <li><a href="#"><span className="fa fa-chevron-right mr-2"></span>Graphic Design</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
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
            </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
