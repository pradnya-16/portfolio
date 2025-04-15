import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Container fluid className="about-section contact-section">
      <Particle />
      <div className="contact-container">
        <div className="get-in-touch">
          <h2 className="title">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <div className="underline"></div>
          <p className="subtitle">
            I'm currently open to talk about new oppurtunities and work on interesting projects.
            <br />
            Let's build something amazing together!
          </p>
        </div>

        <div className="contact-form-box">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Hi, I'd like to talk about..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Send Message ✈️
            </button>
          </form>
        </div>

        <p className="direct-contact-text">Or reach me directly at:</p>
        <a href="mailto:pkadam2@depaul.edu" className="email-button">
          📧 pkadam2@depaul.edu
        </a>

        <div className="social-links">
          <a
            href="https://github.com/pradnya-16"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaGithub size={24} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pradnya-kadam/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href="mailto:pkadam2@depaul.edu" className="social-button">
            <FaEnvelope size={24} /> Email
          </a>
        </div>

      </div>
    </Container>
  );
};

export default Contact;