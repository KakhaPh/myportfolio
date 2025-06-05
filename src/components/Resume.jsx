import { Col, Row } from 'react-bootstrap';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import mycv1 from "/assets/cv/CV-Kakha-Phutkaradze.pdf";
import mycv2 from "/assets/cv/Kakha_Phutkaradze_CV.pdf";


export const Resume = () => {
    return (
        <section className="resume" id="resumes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="resume-bx wow zoomIn">
                            <Row>
                                <div className='Resume-top'>
                                    <h2>Kakha Phutkaradze</h2>
                                    <Col className='d-flex justify-content-between'>
                                        <p>Software Development Engineer</p>
                                        <p>kk.phutkaradze@gmail.com</p>
                                    </Col>
                                </div>
                                <hr />
                                <div>
                                    <h3>Introduction</h3>
                                    <p className='text-justify'>
                                        As a seasoned software developer with a robust foundation in web technologies, I bring a wealth of experience to the table.
                                        My journey includes not only successful completion of coding bootcamps but also academic pursuits at a prestigious European university,
                                        coupled with active participation in the Erasmus+ mobility program at Daugavpils University in Latvia. A nimble learner by nature,
                                        I thrive on collaborating closely with clients to craft tailored solutions that meet their specific needs.
                                        My commitment to excellence and passion for innovative problem-solving make me a valuable asset in the dynamic field of software development.
                                    </p>
                                </div>
                                <hr />
                                <Col className='d-flex justify-content-between'>
                                    <div className='w-100 pe-3'>
                                        <h3>Education</h3>
                                        <p className='text-justify'>European University (Tbilisi, Georgia, 2020 - Present) <span>Bachelor's degree: Information Technology</span></p>
                                        <p className='text-justify'>Daugavpils University (Daugavpils, Latvia, 2023 Autumn Semester) <span>Bachelor's degree: Information Technology (Erasmus + exchange program)</span></p>
                                    </div>
                                    <div className='w-100'>
                                        <h3>Professional Development</h3>
                                        <p className='text-justify'>Machine Learning & NLP Training <span>Blended Intensive Program, PXL University, Belgium</span></p>
                                    </div>
                                </Col>
                                <hr />

                                <Col className='d-flex justify-content-between'>
                                    <div className='w-100 pe-3'>
                                        <h3>Hard Skills</h3>
                                        <ul className='resume-ul'>
                                            <li>
                                                <strong>Frontend Development:</strong> HTML, CSS/Sass/Bootstrap, Javascript/React.js
                                            </li>
                                            <li>
                                                <strong>Backend Development:</strong> PHP/MVC - Laravel, Python
                                            </li>
                                            <li>
                                                <strong>Database Management:</strong> MySQL, PostgreSQL, SQL, MongoDB
                                            </li>
                                            <li>
                                                <strong>API Integration:</strong> Axios, REST API
                                            </li>
                                            <li>
                                                <strong>Version Control:</strong> Git, GitHub
                                            </li>
                                            <li>
                                                <strong>UI Design:</strong> Figma
                                            </li>
                                            <li>
                                                <strong>Cloud Services:</strong> Firebase (Uploads, Hosting); DigitalOcean
                                            </li>
                                            <li>
                                                <strong>Full-Stack Development:</strong> CRUD operations, real estate filters, dynamic layouts
                                            </li>
                                            <li>
                                                <strong>Responsive Design:</strong> Mobile-first and cross-resolution compatibility
                                            </li>
                                            <li>
                                                <strong>OS:</strong> Linux system administration and troubleshooting | Windows OS and Windows Server management | System performance optimization and configuration
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='w-100'>
                                        <h3>Soft Skills</h3>
                                        <ul className='resume-ul'>
                                            <li>Proven ability to solve complex problems with creative solutions</li>
                                            <li>Effective team collaborator, thriving in diverse and dynamic environments</li>
                                            <li>Excellent communication skills, both verbal and written, with the ability to articulate ideas clearly</li>
                                            <li>Strong time management skills, consistently meeting deadlines and delivering results</li>
                                            <li>Adaptable and quick to learn new concepts and technologies</li>
                                            <li>Exceptional attention to detail, ensuring high-quality work</li>
                                            <li>Strong analytical and critical thinking skills, enabling effective decision-making</li>
                                            <li>Experienced in working within multicultural teams, fostering inclusivity and openness</li>
                                        </ul>
                                    </div>
                                </Col>
                                <hr />

                                <Col className='d-flex justify-content-between'>
                                    <div className='w-100 pe-3'>
                                        <h3>Technologies</h3>
                                        <ul className='resume-ul'>
                                            <li>
                                                <strong>Front-End Development</strong>
                                                <ul>
                                                    <li>HTML5</li>
                                                    <li>CSS</li>
                                                    <li>Sass</li>
                                                    <li>Bootstrap</li>
                                                    <li>Tailwind</li>
                                                    <li>React.js</li>
                                                    <li>Next.js</li>
                                                    <li>Vue.js</li>
                                                    <li>JavaScript (ES6+)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Back-End Development</strong>
                                                <ul>
                                                    <li>PHP/MVC - Laravel</li>
                                                    <li>NodeJS</li>
                                                    <li>Python</li>
                                                    <li>C/C++</li>
                                                    <li>JavaScript (ES6+)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Database Management</strong>
                                                <ul>
                                                    <li>MySQL</li>
                                                    <li>PostgreSQL</li>
                                                    <li>SQL</li>
                                                    <li>MongoDB</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Version Control</strong>
                                                <ul>
                                                    <li>Git</li>
                                                    <li>GitHub</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='w-100'>
                                        <h3>Work Experience</h3>
                                        <ul className='resume-ul'>
                                            <li>
                                                <strong>Front News - Georgia (2025-present)</strong>
                                                <ul>
                                                    <li>Lead Full-Stack Developer · News Platform Architect</li>
                                                    <strong>Active Project:</strong>
                                                     <Row>
                                                        <span className='resume-urls'><a href='https://frontnews.ge/'>Frontnews.ge</a>;</span>
                                                    </Row>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>European University</strong>
                                                <ul>
                                                    <li>Software Development Engineer / Web Designer (2022-Present)</li>
                                                    <strong>Active Projects:</strong>
                                                    <Row>
                                                        <span className='resume-urls'><a href='https://lawandworld.ge/'>Lawandworld.ge</a>;</span>
                                                        <span className='resume-urls'><a href='https://old.lawandworld.ge/'>old.lawandworld.ge</a>;</span>
                                                        <span className='resume-urls'><a href='https://law.org.ge/en'>Law.org.ge</a>;</span>
                                                        <span className='resume-urls'><a href='https://eugb.ge/'>Eugb.ge</a>;</span>
                                                        <span className='resume-urls'><a href='https://bmms.ge/'>Bmms.ge</a>;</span>
                                                        <span className='resume-urls'><a href='https://archeologia.ge/'>Archeologia.ge</a>;</span>
                                                    </Row>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Freelance Platforms Fiverr, Upower, Freelancer</strong>
                                                <ul>
                                                    <li>UI/UX Designer / Front-end Developer (2019-Present)</li>
                                                    <li>Front-end Developer (2019-Present)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Self-Development Projects</strong>
                                                <ul>
                                                    <li>Task-Management-System for Redberry : NextJS</li>
                                                    <li>Real-Estate-Manager for Redberry : PHP/Laravel</li>
                                                    <li>mobileShop - PHP/OOP/Ajax</li>
                                                    <li>Globalization & Business - ReactJS, RestAPI, MySQL</li>
                                                    <li>Incubator | Online University Idea - PHP/Laravel/MySQL | CMS/AdminPanel | Unique Routing with Traits </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <div className='downloadCvBtns d-flex justify-content-end pt-5'>
                                    <div className='downloadCvBtn pe-5 text-end'><a href={mycv1} target='_blank' rel='noreferrer'>European University CV</a></div>
                                    <div className='downloadCvBtn pe-5 '><a href={mycv2} target='_blank' rel='noreferrer'>My CV</a></div>
                                </div>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
