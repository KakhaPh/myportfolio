import { Col, Row } from 'react-bootstrap';
import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import mycv from "/assets/cv/CV-Kakha-Phutkaradze.pdf";


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
                                                <strong>Programming Languages</strong>
                                                <ul>
                                                    <li>PHP, Python, C/C++, JavaScript (ES6+)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Front-End Development</strong>
                                                <ul>
                                                    <li>React.js, Vue.js</li>
                                                    <li>HTML5, CSS, Sass, Bootstrap</li>
                                                    <li>JavaScript (ES6+)</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Back-End Development</strong>
                                                <ul>
                                                    <li>PHP/MVC - Laravel, Python, C/C++</li>
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
                                                    <li>Git, GitHub</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='w-100'>
                                        <h3>Work Experience</h3>
                                        <ul className='resume-ul'>
                                            <li>
                                                <strong>European University</strong>
                                                <ul>
                                                    <li>Software Development Engineer / Web Designer (2021-Present)</li>
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
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <div className='downloadCvBtn pe-5 text-end'><a href={mycv} target='_blank' rel='noreferrer'>Download CV</a></div>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
