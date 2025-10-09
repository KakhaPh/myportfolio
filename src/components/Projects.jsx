import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import img1 from "/assets/img/Img1.png";
import img2 from "/assets/img/img2.png";
import img3 from "/assets/img/img3.png";
import img4 from "/assets/img/img4.png";
import img5 from "/assets/img/img5.png";
import img6 from "/assets/img/img6.png";
import img7 from "/assets/img/project-img4.png";
import img8 from "/assets/img/img8.png";
import img9 from "/assets/img/img9.png";
import img01 from "/assets/img/img01.png";
import img02 from "/assets/img/img02.jpg";
import img03 from "/assets/img/img03.png";
import img04 from "/assets/img/img04.png";
import img05 from "/assets/img/img05.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Clinic - Kalantarov Website",
      description: "NextJS + NestJS + TypeScript + MongoDB > Fullstack",
      imgUrl: img05,
      linkIcon: "https://kalantarov.ge",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Dental Clinic - Eudent Website",
      description: "NextJS + NestJS + TypeScript + MongoDB > Fullstack",
      imgUrl: img03,
      linkIcon: "https://eudent.ge",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Plagiarism Quizz - Mailing system",
      description: "NextJS + ExpressJS + TypeScript",
      imgUrl: img02,
      linkIcon: "https://quizz-nine-wine.vercel.app/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Frontnews - Georgia - News website",
      description: "NextJS + NodeJS + ExpressJS + TypeScript + MongoDB > Fullstack",
      imgUrl: img01,
      linkIcon: "https://frontnews.ge/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Redberry Bootcamp - Bootcamp task, momentum",
      description: "Development and Design | NextJS/TypeScript",
      imgUrl: img9,
      linkIcon: "https://momentum-theta-lyart.vercel.app/",
      githubIcon: "https://github.com/KakhaPh/momentum"
    },
    {
      title: "Business Startup 8 - Restaurant Management System",
      description: "Development | PHP/OOP + MySQL",
      imgUrl: img8,
      githubIcon: "https://github.com/KakhaPh/php-restaurant-management"
    },
    {
      title: "Business Startup 7 - Online learning platform",
      description: "Design & Development | PHP/Laravel/Blade + MySQL",
      imgUrl: img7,
      linkIcon: "https://incubator.ge",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 6 - Online Shop",
      description: "Design & Development | PHP/oop/ajax + MySQL",
      imgUrl: img6,
      linkIcon: "https://mobileshop-kp.000webhostapp.com/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 6 - Law insitute website",
      description: "Design & Development | OJS",
      imgUrl: img04,
      linkIcon: "https://archeologia.ge/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 5 - Law insitute website",
      description: "Design & Development | OJS",
      imgUrl: img5,
      linkIcon: "https://eugb.ge/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 4 - Law insitute website",
      description: "Design & Development | PHP/Laravel + MySql",
      imgUrl: img4,
      linkIcon: "https://law.org.ge/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 3 - Law institute website",
      description: "Design & Development | OJS",
      imgUrl: img3,
      linkIcon: "https://lawandworld.ge/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 2 - First Real project",
      description: "Design & Development | PHP + MySql",
      imgUrl: img2,
      linkIcon: "http://old.lawandworld.ge/",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 1 - My first Portfolio",
      description: "Design & Development",
      imgUrl: img1,
      githubIcon: "https://github.com/KakhaPh/oldPortfolio",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Experienced in web technologies, I deliver tailored solutions with innovation and adaptability, making me a valuable asset in software development.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Completed web Projects Page 1</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* Add other Tab.Pane entries as needed */}
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="background-image"></img> */}
    </section>
  )
}
