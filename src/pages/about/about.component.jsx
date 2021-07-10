import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/jade.jpg";

import "./about.style.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  rounded
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello world! My name is <strong>&nbsp;Jade Jhagru</strong>
                <br />I am a new and upcoming UI/UX Fullstack Developer. Over
                the years, I have gained a lot of knowledge in my previous field
                of design and I decided I needed something more modern and
                challenging.
                <br />
                In 2021 I successfully completed my Engineering at The
                University of Toronto's Software Engineering Bootcamp. I am also
                self taught in UI/UX Design.
                <br />
                Currently I have experience with HTML, CSS, JavaScript,
                React.js, Express.js, Node.js, mySQL, AdobeXD, and Figma.
                <br />
                When I'm working with clients, my goal is always driven towards
                providing them with the most seamless experience with the best
                level of quality and service.
                <br />I love learning about new technologies, what problems they
                can solve and how can I use them to build better and scalable
                products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1UbFDznMj5RR4wCVZfQbpbrwVvNbvHZee/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/jadejhagru"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/jade-jhagru-782122a2/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
