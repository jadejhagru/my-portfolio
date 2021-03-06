import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Image from "../src/assets/img/parallax/background.jpg";
import Skills from "../src/pages/skills/skills.component";
import ProjectTimeline from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
import Particles from "react-particles-js";
import { ParticlesSnow } from "./particles.js";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <Particles className="particles particles-box" params={ParticlesSnow} />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={Image}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>

        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>

        <div>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <ContactForm />
            </Fade>
          </Container>

          <hr />
          <FooterPanel />
        </div>
      </div>
    </div>
  );
};

export default App;
