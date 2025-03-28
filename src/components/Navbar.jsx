import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '/assets/img/logo.png';
import navIcon1 from '/assets/img/nav-icon1.svg';
import navIcon2 from '/assets/img/nav-icon2.svg';
import navIcon3 from '/assets/img/nav-icon3.svg';
import navIcon4 from '/assets/img/nav-icon4.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll); 
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="mainLogo" alt="KP" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#resumes"
              className={activeLink === 'Resume' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Resume')}
            >
              CV
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kakha-phutkaradze-1a4b02225/" target='_blank'>
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/KPhutkaradze" target='_blank'>
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/kakhaphutkaradze__/" target='_blank'>
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a href="https://github.com/kakhaph/" target='_blank'>
                <img src={navIcon4} alt="Github" />
              </a>
            </div>
              <button className="vvd" onClick={() => {window.open("https://github.com/kakhaph/", "_blank")}}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar