import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cosmetic from "../../Assets/Projects/cosmetic.png";
import emotion from "../../Assets/Projects/emotion.png";
import recipe from "../../Assets/Projects/recipe.png";
import merchandisemart from "../../Assets/Projects/merchandisemart.png";
import rogue from "../../Assets/Projects/rogue game.png";
import weather from "../../Assets/Projects/weather.png";
import { matchRoutes } from "react-router-dom";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merchandisemart}
              isBlog={false}
              title="Merchandise Mart"
              description="Merchandise Mart is a full-stack e-commerce web application that allows users to browse products, view details, and proceed with checkout. 
              It features user authentication, JWT-based protected routes, and a polished frontend built with React. 
              The backend is powered by ASP.NET Core with a SQLite database and RESTful APIs."
              ghLink="https://github.com/pradnya-16/Merchandise_Mart.git"
              demoLink="https://merchandise-mart-o1s9.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Builder"
              description="Recipe Finder is a native iOS application that allows users to search for recipes based on selected ingredients, 
              add custom recipes, and manage favorites. Built using Swift and Core Data, the app features a clean UIKit-based interface, gesture-based interactions, 
              and persistent local storage for a seamless user experience."
              ghLink="https://github.com/pradnya-16/Recipe-Builder-App.git"
              demoLink="https://youtu.be/FYRT-IBX9C0"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather App is a native Android application that provides real-time weather updates using the Visual Crossing Weather API. 
              It allows users to view current conditions, hourly forecasts, and a 15-day outlook based on their geolocation. 
              The app features a clean UI, temperature-based dynamic themes, and interactive elements like map integration, share functionality, 
              and unit toggling between Celsius and Fahrenheit."
              ghLink="https://github.com/pradnya-16/Weather-App.git"
              demoLink="#"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cosmetic}
              isBlog={false}
              title="Ageing Sign Detection Cosmetic Product Recommendation System"
              description="Ageing Sign Detection is a deep learning-based facial analysis system that classifies and localizes common signs 
              of ageing such as puffy eyes, wrinkles, and dark spots. The model, built on EfficientNet, uses Haar cascades and facial 
              landmarks for accurate detection and overlays bounding boxes around detected ageing signs."
              ghLink="https://github.com/pradnya-16/Cosmetic-product-recommendation-System.git"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rogue}
              isBlog={false}
              title="Rogue Game"
              description="Rogue Game is a 2D dungeon-style game built in Java using Swing. The player navigates rooms, avoids a pursuing monster, 
              and reaches staircases to advance levels. The game features real-time movement, score and health tracking, monster AI behavior, 
              and randomly generated player identities—all implemented with custom game logic and UI components."
              ghLink="https://github.com/pradnya-16/Rogue-game.git"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
