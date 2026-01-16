import { Col, Row } from 'react-bootstrap';
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
                                        <p>Software Development Engineer / Test Automation Engineer</p>
                                        <p>kk.phutkaradze@gmail.com</p>
                                    </Col>
                                </div>
                                <hr />
                                <div>
                                    <h3>Introduction</h3>
                                    <p className='text-justify'>
                                        Software Development Engineer with a strong foundation in modern web technologies
                                        and hands-on experience in enterprise-level test automation.
                                        My background combines full-stack development, academic training at a European
                                        university, and international experience through the Erasmus+ mobility program
                                        at Daugavpils University in Latvia.
                                        <br /><br />
                                        In parallel with software development, I specialize in test automation engineering,
                                        contributing to mobile (iOS/Android), web, and API testing in a banking environment.
                                        I work with modern automation frameworks, focus on clean and maintainable test
                                        architecture, and support reliable CI/CD-driven delivery.
                                        I am highly adaptable, technically driven, and motivated to build robust,
                                        scalable, and high-quality software systems.
                                    </p>

                                </div>
                                <hr />
                                <Col className='d-flex justify-content-between'>
                                    <div className='w-100 pe-3'>
                                        <h3>Education</h3>
                                        <p className='text-justify'>European University (Tbilisi, Georgia, 2020 - Present) <span>Bachelor's degree: Information Technology</span></p>
                                        <p className='text-justify'>Daugavpils University (Daugavpils, Latvia, 2023 Autumn Semester) <span>Bachelor's degree: Information Technology (Erasmus + exchange program)</span></p>
                                        <p className='text-justify'>
                                            TBC IT Academy (June 2025 - November 2025)
                                            <span> Test Automation Engineering Program</span>
                                        </p>
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
                                                <strong>Frontend Development:</strong> HTML, CSS/Sass/Bootstrap, JavaScript, React.js
                                            </li>
                                            <li>
                                                <strong>Backend Development:</strong> PHP (MVC) - Laravel, Python, NodeJS
                                            </li>
                                            <li>
                                                <strong>Database Management:</strong> MySQL, PostgreSQL, SQL, MongoDB
                                            </li>
                                            <li>
                                                <strong>API Integration & Testing:</strong> RESTful APIs, Axios, Rest Assured
                                            </li>
                                            <li>
                                                <strong>Test Automation Frameworks:</strong> Selenium, Selenide, Playwright, XCUITest, UIAutomator, Espresso
                                            </li>
                                            <li>
                                                <strong>Mobile Automation:</strong> iOS (Xcode, XCUITest), Android (Android Studio, UIAutomator, Jetpack Compose UI Testing)
                                            </li>
                                            <li>
                                                <strong>Programming Languages:</strong> Java, Kotlin, JavaScript, PHP, Python
                                            </li>
                                            <li>
                                                <strong>Version Control:</strong> Git, GitHub
                                            </li>
                                            <li>
                                                <strong>UI Design:</strong> Figma
                                            </li>
                                            <li>
                                                <strong>Cloud Services:</strong> Firebase (Uploads, Hosting), DigitalOcean
                                            </li>
                                            <li>
                                                <strong>Full-Stack Development:</strong> CRUD operations, dynamic layouts,
                                                real estate filtering systems
                                            </li>
                                            <li>
                                                <strong>Responsive Design:</strong> Mobile-first and cross-resolution compatibility
                                            </li>
                                            <li>
                                                <strong>Operating Systems:</strong> Linux system administration and troubleshooting |
                                                Windows OS and Windows Server management | system performance optimization and configuration
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
                                                    <li>PHP / MVC - Laravel</li>
                                                    <li>Node.js</li>
                                                    <li>Python</li>
                                                    <li>C / C++</li>
                                                    <li>JavaScript (ES6+)</li>
                                                </ul>
                                            </li>

                                            <li>
                                                <strong>Test Automation & Quality Engineering</strong>
                                                <ul>
                                                    <li>Selenium / Selenide / Playwright</li>
                                                    <li>Rest Assured</li>
                                                    <li>XCUITest / UIAutomator / Espresso</li>
                                                    <li>Jetpack Compose UI Testing</li>
                                                    <li>Xcode / Android Studio</li>
                                                    <li>iOS Simulators / Android Emulators & Real Devices</li>
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
                                                <strong>Version Control & Build Systems</strong>
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
                                                <strong>TBC Bank - Georgia (October 2025 - present)</strong>
                                                <ul>
                                                    <li>Test Automation Engineer</li>
                                                    <li>
                                                        Designing, developing, and maintaining automated test suites for
                                                        enterprise mobile banking applications on iOS and Android platforms.
                                                    </li>
                                                    <li>
                                                        <strong>Technologies:</strong> Java, Kotlin, XCUITest, Selenium, Selenide,
                                                        Playwright, Rest Assured, Xcode, Android Studio
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>STV News - Georgia (September - December 2025)</strong>
                                                <ul>
                                                    <li>Lead Full-Stack Developer · News Platform Architect</li>
                                                    <strong>Active Project:</strong>
                                                    <Row>
                                                        <span className='resume-urls'><a href='https://stv.ge/'>Stv.ge</a>;</span>
                                                    </Row>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>EuDent - Dental Clinic (August 2025 - December 2025)</strong>
                                                <ul>
                                                    <li>Full-Stack Developer · Informational Platform Architect</li>
                                                    <strong>Active Project:</strong>
                                                    <Row>
                                                        <span className='resume-urls'><a href='https://eudent.ge/'>eudent.ge</a>;</span>
                                                    </Row>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>Front News - Georgia (February 2025 - December 2025)</strong>
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
                                                    <li>Software Development Engineer / Web Designer (September 2022 - Present)</li>
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
                                                    <li>UI/UX Designer / Front-end Developer (January 2019 - August 2025)</li>
                                                    <li>Front-end Developer (January 2019 - August 2025)</li>
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
