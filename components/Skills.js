import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
import styles from './skill.module.css'; // Import the custom stylesheet

const skillsData = [
  { name: 'CSS', percentage: 95 },
  { name: 'HTML', percentage: 98 },
  { name: 'jQuery', percentage: 68 }
];

const Skills = () => {
  return (
    <section className={`${styles.ftcoSection}`} id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className={`${styles.headingSection} col-md-12 heading-section text-center ftco-animate`}>
            <span className="subheading">Skills</span>
            <div className={`${styles.headSection}`}>
            <h2 className="mb-4">My Skills</h2>
            </div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row mb-5">
          {skillsData.map((skill, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className={`${styles.cardContainer}`}>
                <h2 className="h5 font-weight-bold text-center mb-4">{skill.name}</h2>
                <div className={`${styles.progressContainer}`}>
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={{
                      path: {
                        stroke: '#808080', // Grey color for the circular progress bar
                        strokeWidth: '5px', // Adjust the thickness of the progress bar
                      },
                      trail: {
                        stroke: 'transparent', // Remove background color by setting it to transparent
                      },
                      text: {
                        fill: '#333', // Set text color to dark grey
                        fontSize: '24px', // Adjust font size for the percentage text
                        fontWeight: 'bold', // Add bold to the percentage text
                      },
                    }}
                  />
                </div>
                {/* Converted Last Week/Month Stats */}
                <div className={`row ${styles.statsRow}`}>
                  <div className="col-6 border-right">
                    <div className="h4 font-weight-bold mb-0">28%</div>
                    <span className="small text-gray">Last week</span>
                  </div>
                  <div className="col-6">
                    <div className="h4 font-weight-bold mb-0">60%</div>
                    <span className="small text-gray">Last month</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
