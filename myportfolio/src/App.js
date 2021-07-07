import React from 'react';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousel from "./components/my-carousel/my-carousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component"
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <div>
        <Parallax blur={{ min: -15, max: 15 }} bgImage={require("./assets/img/parallax/background.jpg")} bgImageAlt="" strength={-200}>
            <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
            </div>
        </Parallax>
    </div>
  </div>
  );
}

export default App;
