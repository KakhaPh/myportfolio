import { Row, Col } from 'react-bootstrap';
import htmlImg from "/assets/img/html.png";
import cssImg from "/assets/img/css.png";
import sassImg from "/assets/img/sass.png";
import bootstrapImg from "/assets/img/bootstrap.png";
import javascriptImg from "/assets/img/javascript.png";
import jqueryImg from "/assets/img/jqu.png";
import phpImg from "/assets/img/php.png";
import laravelImg from "/assets/img/laravel.png";
import githubImg from "/assets/img/github.png";
import cppImg from "/assets/img/c++.png";
import pythonImg from "/assets/img/py.png";
import wordpressImg from "/assets/img/wordpress.png";
import joomlaImg from "/assets/img/joomla.png";
import reactImg from "/assets/img/reactjs.png";
import mysqlImg from "/assets/img/mysql.png";
import mongodbImg from "/assets/img/mongodb.png";

const levels = [
  { label: 'Web Development', percent: 90 },
  { label: 'Graphics Design', percent: 70 },
  { label: 'Programming', percent: 80 },
];

const skills = [
  { name: 'HTML', image: htmlImg },
  { name: 'CSS', image: cssImg },
  { name: 'Sass', image: sassImg },
  { name: 'Bootstrap', image: bootstrapImg },
  { name: 'JavaScript', image: javascriptImg },
  { name: 'jQuery', image: jqueryImg },
  { name: 'PHP', image: phpImg },
  { name: 'Laravel', image: laravelImg },
  { name: 'GitHub', image: githubImg },
  { name: 'C++', image: cppImg },
  { name: 'Python', image: pythonImg },
  { name: 'WordPress', image: wordpressImg },
  { name: 'Joomla', image: joomlaImg },
  { name: 'ReactJS', image: reactImg },
  { name: 'MySQL', image: mysqlImg },
  { name: 'MongoDB', image: mongodbImg },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Proficient in diverse web technologies, I bring adaptability and innovative problem-solving to the table, making a valuable contribution to software development projects.</p>
              <Row className="skill-levels justify-content-center g-4">
                {levels.map(({ label, percent }) => (
                  <Col key={label} xs={4} className="item">
                    <div className="circle-border">
                      <div className="circle">{percent}%</div>
                    </div>
                    <h5>{label}</h5>
                  </Col>
                ))}
              </Row>
              <div className="skills-container">
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-box">
                    <img src={skill.image} alt={`${skill.name} logo`} title={skill.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
