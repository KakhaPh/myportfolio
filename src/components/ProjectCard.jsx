import { Col } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const ProjectCard = ({ title, description, imgUrl, linkIcon, githubIcon }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="imgUrl"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <div>
            {linkIcon && <a href={linkIcon} target="_blank" rel="noreferrer" className="fontawesome_prjectCard"><i className="fas fa-link"></i> </a>}
            {githubIcon && <a href={githubIcon} target="_blank" rel="noreferrer" className="fontawesome_prjectCard"><i className="fab fa-github"></i></a>}
          </div>
        </div>
      </div>
    </Col>
  );
};
