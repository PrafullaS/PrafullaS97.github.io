import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manish Shanker </span>
            from <span className="purple"> London, UK.</span>
            <br /> I am a experienced professional working in IT Industry for well over 20 years.
            <br />
            Additionally, I am currently employed as a Director of Software Engineering at
            Publicis Sapient.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technology reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Finding and trying the latest in Tech world
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
