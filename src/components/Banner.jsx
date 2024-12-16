import { useState, useEffect, useMemo, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "/assets/img/Coder.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 10);

  // Memoized array to avoid re-creation
  const toRotate = useMemo(() => ["Web Developer", "Web Designer", "Freelancer", "Programmer"], []);
  const period = 2000;

  // Stabilize the tick function with useCallback
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, toRotate, text, period]);

  // useEffect for the typing effect
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [tick, delta]); // Add `tick` and `delta` as dependencies

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h2>
                    {`Hi! I'm Kakha Phutkaradze`}{" "}
                    <span className="txt-rotate" data-period="1000" data-rotate={toRotate}>
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    Hello, I'm Kakha Phutkaradze, a versatile web developer
                    proficient in ReactJs and PHP technologies, including Laravel and
                    Blade. I'm here to design and implement effective web solutions
                    tailored to your needs.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} className="animated_img" alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
