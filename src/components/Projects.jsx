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
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup 7 - PHP/Laravel/Blade",
      description: "Design & Development",
      imgUrl: img7,
      linkIcon: "https://incubator.ge",
      githubIcon: "https://github.com/KakhaPh",
    },
    {
      title: "Business Startup 6 - PHP/oop/ajax",
      description: "Design & Development",
      imgUrl: img6,
      linkIcon: "https://mobileshop-kp.000webhostapp.com/",
      githubIcon: "https://github.com/KakhaPh?tab=repositories",
    },
    {
      title: "Business Startup 5 - Law insitute website",
      description: "Design & Development",
      imgUrl: img5,
      linkIcon: "https://eugb.ge/index.php/111",
      githubIcon: "https://github.com/KakhaPh?tab=repositories",
    },
    {
      title: "Business Startup 4 - Law insitute website",
      description: "Design & Development",
      imgUrl: img4,
      linkIcon: "https://law.org.ge/",
      githubIcon: "https://github.com/KakhaPh?tab=repositories",
    },
    {
      title: "Business Startup 3 - Law institute website",
      description: "Design & Development",
      imgUrl: img3,
      linkIcon: "https://lawandworld.ge/",
      githubIcon: "https://github.com/KakhaPh?tab=repositories",
    },
    {
      title: "Business Startup 2 - First Real project",
      description: "Design & Development",
      imgUrl: img2,
      linkIcon: "http://old.lawandworld.ge/",
      githubIcon: "https://github.com/KakhaPh?tab=repositories",
    },
    {
      title: "Business Startup 1 - My first Portfolio",
      description: "Design & Development",
      imgUrl: img1,
      linkIcon: "",
      githubIcon: "https://github.com/KakhaPh?tab=repositories",
    },
    // Repeat similar entries for other projects
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
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
