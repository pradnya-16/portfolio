import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pradnya Kadam </span>
            a passionate and curious Computer Science graduate student based in <span className="purple"> Chicago, Illinois.</span>
            <br /><br />
            With a background in <span className="purple">Computer Engineering </span> and hands-on experience 
            in <span className="purple">web development, app development, and UI/UX design, </span> I bring a 
            unique blend of creativity and technical expertise to the table.
            <br /><br />
            I've worked on projects ranging from AI-driven skincare recommendation systems to full-stack 
            e-commerce platforms — each strengthening my foundation in programming languages like
            <span className="purple"> Java, Python, Swift, and JavaScript, and tools like ReactJS, NodeJS, XCode, and Adobe Suite.</span>
            <br />
            <br />
            When I'm not coding or designing, you’ll find me planning events, contributing to causes I care about, 
            or brushing up on languages (yes, I speak four!). I'm always excited to 
            learn, collaborate, and contribute to projects that make a difference.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work hard to be the best version of yourself."{" "}
          </p>
          <footer className="blockquote-footer">Pradnya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
