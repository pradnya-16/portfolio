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
    title: "Android App Development",
    platform: "MyCaptain",
    year: "2022",
    description:
      "Completed a hands-on workshop with MyCaptain (March 2022), covering the fundamentals of building Android applications using Java and XML. Gained experience in creating layouts, handling user input, and deploying basic functional apps.",
    link: "https://drive.google.com/file/d/1xq7goiYprvDQiJlnIa0wIqOVFhvMwlEx/view?usp=sharing"
  },
  {
    title: "Full Stack Development",
    platform: "MyCaptain",
    year: "2021",
    description:
      "Completed a workshop with MyCaptain (September 2021), covering the core concepts of frontend and backend development. Gained practical experience in building responsive web applications using technologies like HTML, CSS, JavaScript, and introductory backend integration.",
    link: "https://drive.google.com/file/d/1mb0DviVyuIibXqMtmGcKFsDJ9ZTFKBUX/view?usp=sharing"
  },
  {
    title: "Artificial Intelligence",
    platform: "MyCaptain",
    year: "2021",
    description:
      "Artificial Intelligence – Completed a workshop with MyCaptain (August 2021) introducing core AI concepts, including supervised learning, decision trees, and neural networks. Gained hands-on experience through beginner-friendly projects and exercises focused on real-world AI applications.",
    link: "https://drive.google.com/file/d/1v4Wr3lKwSUhVNW2G0hTCtPfJRQlIy2Zd/view?usp=sharing"
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
      {cert.link && (
        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
          View Certificate
        </a>
      )}
    </div>
  ))}
</div>
    </div>
  );
}

export default Academics;
