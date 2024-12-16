import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from "/assets/img/html.png";
import image2 from "/assets/img/css.png";
import image3 from "/assets/img/sass.png";
import image4 from "/assets/img/bootstrap.png";
import image5 from "/assets/img/javascript.png";
import image6 from "/assets/img/jqu.png";
import image7 from "/assets/img/php.png";
import image8 from "/assets/img/laravel.png";
import image9 from "/assets/img/github.png";
import image10 from "/assets/img/c++.png";
import image11 from "/assets/img/py.png";
import image12 from "/assets/img/wordpress.png";
import image13 from "/assets/img/joomla.png";
import image14 from "/assets/img/reactjs.png";
import image15 from "/assets/img/mysql.png";
import image16 from "/assets/img/mongodb.png";

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchedSkills = [
      { name: 'HTML', image: image1 },
      { name: 'CSS', image: image2 },
      { name: 'Sass', image: image3 },
      { name: 'Bootstrap', image: image4 },
      { name: 'JavaScript', image: image5 },
      { name: 'ReactJS', image: image6 },
      { name: 'jQuery', image: image7 },
      { name: 'PHP', image: image8 },
      { name: 'Laravel', image: image9 },
      { name: 'Github', image: image10 },
      { name: 'C++', image: image11 },
      { name: 'Python', image: image12 },
      { name: 'WordPress', image: image13 },
      { name: 'Joomla', image: image14 },
      { name: 'Joomla', image: image15 },
      { name: 'Joomla', image: image16 },
    ];
    setSkills(fetchedSkills);
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Proficient in diverse web technologies, I bring adaptability and innovative problem-solving to the table, making a valuable contribution to software development projects.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <div className="circle-border">
                    <div className="circle">
                      90%
                    </div>
                  </div>
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <div className="circle-border">
                    <div className="circle">
                      70%
                    </div>
                  </div>
                  <h5>Graphics Design</h5>
                </div>

                <div className="item">
                  <div className="circle-border">
                    <div className="circle">
                      80%
                    </div>
                  </div>
                  <h5>Programming</h5>
                </div>
              </Carousel>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-box">
                  <img src={skill.image} alt={`${skill.name} Logo`} />
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
