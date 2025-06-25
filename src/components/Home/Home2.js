import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              MEET THE <span className="purple"> DEVELOPER </span> BEHIND THE SCREEN
            </h1>
            <p className = "home-about-body">
            I fell in love with software development—and never looked back. Somewhere between writing my first Hello World and building full-blown applications, I found my thing. 🚀
              <br />
              <br />I'm fluent in the classics like
              <i>
                <b className="purple"> Java, Python, and Javascript. </b>
              </i>
              <br />I’ve been building my way through full stack development—front to back, UI to database, logic to deployment.
              <br />
              <br /> 
              I love creating clean, object-oriented code and bringing ideas to life through intuitive,
              well-designed systems. Whether it's a responsive web app or a mobile experience, 
              I'm always up for the challenge. <b className="purple">iOS? Android? I'm in. </b>
              <br />
              <br />
              Whenever possible, I apply my passion to projects that let me use modern frameworks and tools—from 
              <b className="purple"> Java </b> and
              <i>
                <b className="purple">
                  {" "}
                  Spring Boot on the backend
                </b>
              </i>
              &nbsp; to
              <i>
                <b className="purple"> React on the frontend</b>
              </i>
              &nbsp; with a solid dose of
              <i>
              <b className="purple">
                  {" "}
                  Git, SQL, and design thinking
                </b>
              </i>
              &nbsp; in between.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/pradnya-16"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/pk__1601"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pradnya-kadam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
