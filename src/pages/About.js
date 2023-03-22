import React from "react";
import "./CSS/About.css"
import { Container, Row, Col } from "react-bootstrap";
import SkillSet from "../Images/front-end-skills.png"

import Footer from "../Components/Footer"




const About = () => {
  return <div>

    {/* Hero Section */}
    <section className="HeroSection">
      <Container>
        <Row>
          <Col sm={6} className="AboutImageSection">
            <img src={SkillSet} alt="About Skills" />
          </Col>
          <Col sm={6} className="AboutContent">
            <h4>About Me</h4>
            <h2>Chinese girl who enjoys life science and coding</h2>
            <p>I am a Biology student from the University of York whose life depends on the prosperity of rapeseeds. Coming from a bioinformatics background I've realised how much powerful advancements and revolution tech has brought into life science research and the life of human-being in general. I found my creativity was largely inspired by the coding process and it really allowed me to exhibit many skills I adopted from my studies.</p> 
            
            <p>I have previously had some experiences with analytical libraries such as Pandas, NumPy, Matplotlib for processing biological data. Scientific data processes for life sciences that requires a lot of normalization.Machine learning, predictive modelling and algorithms for plant genomics that assist with molecular marker assistant breeding of polyploid plants/crops and metabolites analysis.</p>

              <p>I have earned a certificate in Front-end Development from the edX skill Bootcamp, where I developed skills in JavaScript, CSS, React.js, and responsive web design.</p>

              <p>An innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. My degrees in genomics and bioinformatics have prepared me to approach problems with creativity and teamwork.</p>

              <p>With each project, I aim to understand how to best engage users for an impactful user experience. I applied aspects of UX and agile development in a recent project where I worked in a team of 3 to develop a single-page weather forecast app that helps travelers to see the weather outlook for multiple cities so that they can plan a trip accordingly.</p>

              <p>When I am not designing or developing, I enjoy reading, exercising, learning a new language, or reading up on the latest trends in web and mobile design.</p>

             <p> I am excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out to me to chat about our next project here.
            </p>


            <h5><span>Let's be friends:</span> <br /> <a href="mailto:j.hua@york.ac.uk" rel="noreferrer">j.hua@york.ac.uk</a></h5>
          </Col>
        </Row>
      </Container>
    </section>






    <Footer />

  </div>
};

export default About;