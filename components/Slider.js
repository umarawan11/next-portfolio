import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import sliderImg1 from '../public/images/pet.jpg';
import sliderImg2 from '../public/images/pet.jpg'; 

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section id="home-section" className="hero">
      <div className="home-slider">
        <Slider {...settings}>
          {/* Slider Item 1 */}
          <div className="slider-item">
            <div className="one-third img">
              <div className="image-wrapper">
                <Image src={sliderImg1} alt="Pet image" layout="fill" objectFit="cover" priority />
                <div className="overlay"></div>
              </div>
              <div className="slider-content">
                <div className="text">
                  <span className="subheading">Hello! This is Umar Awan</span>
                  <h1 className="mb-4 mt-3">
                    Creative <span>web</span> Designer &amp; Developer
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary">Hire me</a>
                    <a href="/CV.pdf" className="btn btn-primary btn-outline-primary" download>
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Item 2 */}
          <div className="slider-item">
            <div className="one-third img">
              <div className="image-wrapper">
                <Image src={sliderImg2} alt="Background image" layout="fill" objectFit="cover" priority />
                <div className="overlay"></div>
              </div>
              <div className="slider-content">
                <div className="text">
                  <span className="subheading">We Design &amp; Build Brands</span>
                  <h1 className="mb-4 mt-3">
                    Hi, I am <span>Umar Awan</span>, This is my favorite work.
                  </h1>
                  <p>
                    <a href="#" className="btn btn-primary">Hire me</a>
                    <a href="/blank.pdf" className="btn btn-primary btn-outline-primary" download>
                      Download CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Additional Custom Styles */}
      <style jsx>{`
        .home-slider {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .slider-item {
          position: relative;
          height: 100vh;
        }

        .one-third.img {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .slider-content {
          position: absolute;
          bottom: 250px;
          left: 50px;
          color: #fff;
        }

        .btn {
          background-color: #B1B493;
          border: none;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 4px;
        }

        .btn-primary:hover {
          background-color: white;
          color: #B1B493;
        }

        /* Transparent button style with border */
        .btn-outline-primary {
          background-color: transparent;
          color: #B1B493;
          border: 2px solid #B1B493;
        }

        /* Hover effect for the Download CV button */
        .btn-outline-primary:hover {
          background-color: #B1B493;
          color: white;
          border: 2px solid #B1B493;
        }

        /* Space between the buttons */
        .btn + .btn {
          margin-left: 20px;
        }
      `}</style>
    </section>
  );
};
export default CustomSlider;