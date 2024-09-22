import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlane, faFilm, faFootballBall } from '@fortawesome/free-solid-svg-icons';
import aboutImg from '../public/images/about-1.jpg';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.ftcoAbout} id="about-section">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className={styles.imgAbout}>
              <Image 
                src={aboutImg} 
                alt="About Image" 
                layout="responsive" 
                width={500} 
                height={600} 
                objectFit="cover" 
                className={styles.image}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
            <div className="py-md-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section">
                  <span className={styles.subheading}>My Intro</span>
                  <h2 className={`${styles.heading} mb-4`}>About Me</h2>
                  <p className={styles.paragraph}>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                  <ul className={styles.aboutInfo}>
                    <li className="d-flex"><span>Name:</span> <span>Clyde Nowitzki</span></li>
                    <li className="d-flex"><span>Date of birth:</span> <span>January 01, 1990</span></li>
                    <li className="d-flex"><span>Address:</span> <span>San Francisco CA 97987 USA</span></li>
                    <li className="d-flex"><span>Zip code:</span> <span>1000</span></li>
                    <li className="d-flex"><span>Email:</span> <span>cydenowitzki@gmail.com</span></li>
                    <li className="d-flex"><span>Phone:</span> <span>+1-2234-5678-9-0</span></li>
                  </ul>
                </div>
                <div className="col-md-12">
                  <div className={styles.interests}>
                    <div className={styles.interestWrap}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faMusic} />
                      </div>
                      <div className={styles.text}>Music</div>
                    </div>
                    <div className={styles.interestWrap}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faPlane} />
                      </div>
                      <div className={styles.text}>Travel</div>
                    </div>
                    <div className={styles.interestWrap}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faFilm} />
                      </div>
                      <div className={styles.text}>Movies</div>
                    </div>
                    <div className={styles.interestWrap}>
                      <div className={styles.icon}>
                        <FontAwesomeIcon icon={faFootballBall} />
                      </div>
                      <div className={styles.text}>Sports</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
