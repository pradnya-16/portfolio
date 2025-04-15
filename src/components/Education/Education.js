import React from "react";
import "./Education.css";
import Particle from "../Particle";

const academicsData = [
  {
    title: "Masters in Computer Science",
    institution: "DePaul University, Chicago",
    duration: "2023 - 2025",
    gpa: "3.7",
    details: [
      "Area of Focus: Software and Systems Development",
      "Key courses: Mobile application Development in iOS, Mobile application Development in Andriod, Web Technology, Object oriented Enterprise Development",
      "Worked as a Faculty and Staff Engagement Assistant at Division of Mission and Ministry (FASE)",
      "Worked as Grader for College of Computing and Digital Media (CDM) assisting Professors to grade courses like Databse Managemnet and Object-Oriented Software Development",
    ],
  },
  {
    title: "Bachelors in Computer Engineering",
    institution: "Pune University, Maharashtra, India",
    duration: "2019 - 2023",
    gpa: "3.4",
    details: [
      "Key courses: Data Structures and Algorithms, machine learning, Software Systems, Networks",
      "Head of Documentation and Magazine Committee at ACES (Association of Computer Engineering Students)",
    ],
  },
];

const keyCourses = [
  "Applied Algorithms & Data Structure",
  "Concepts of Programming Language",
  "Distributed Systems",
  "Principles of Database Management Systems",
  "Object Oriented Enterprise Development",
  "Agile Software Development",
  "Web Technologies",
  "Software Engineering",
  "Computer Networks",
  "Operating Systems",
  "Machine Learning",
  "Cloud Computing",
  "Blockchain Technology",
  "Internet of Things"
];

const certifications = [
  {
    title: "Python Programming",
    platform: "Coursera",
    year: "2022",
    description:
      "Comprehensive course covering advanced Python concepts and applications.",
  },
  {
    title: "Web Development with JavaScript",
    platform: "Udemy",
    year: "2022",
    description:
      "In-depth training on building modern web applications using JavaScript.",
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">My Academic Journey</h1>

      <div className="academics-grid">
        {academicsData.map((edu, index) => (
          <div key={index} className="academic-card">
            <h2>{edu.title}</h2>
            <h3>{edu.institution}</h3>
            <p className="academic-duration">{edu.duration}</p>
            <p className="academic-gpa">GPA: {edu.cgpa}</p>
            <ul>
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section-heading">Key Courses</h2>
<div className="courses-card">
  <div className="courses-grid">
    {keyCourses.map((course, i) => (
      <div key={i} className="course-item">
        <span className="course-dot">•</span> {course}
      </div>
    ))}
  </div>
</div>


      <h2 className="section-heading">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, i) => (
          <div key={i} className="cert-card">
            <h3>{cert.title}</h3>
            <p><strong>{cert.platform}</strong> • {cert.year}</p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics;
