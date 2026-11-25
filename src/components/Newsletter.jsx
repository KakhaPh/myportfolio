/* The subscribe form below is commented out for now; its state and handlers
   are kept so it can be switched back on. */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [prevStatus, setPrevStatus] = useState(status);

  // Clear the field once a subscription succeeds.
  if (status !== prevStatus) {
    setPrevStatus(status);
    if (status === 'success') setEmail('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col xs={12}>
            <h1 className="text-center">
              Hit me up for any opportunities or questions—I’m always open to new connections!
            </h1>
            <p className="text-center fw-bolder fs-3">
              📩 Email: kk.phutkaradze@gmail.com
            </p>
          </Col>
          {/* <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col> */}
        </Row>
      </div>
    </Col>
  )
}
