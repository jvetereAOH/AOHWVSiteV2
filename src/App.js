import './App.scss';
import Container from 'react-bootstrap/Container';
import CustomNavbar from './one/CustomNavbar';
import React, { useEffect } from 'react';



import Home           from './one/Home';
import AboutUs          from './one/AboutUs';
import { Link, animateScroll as scroll } from "react-scroll";
import Services from './one/Services';
import EffectBlog from './one/blog/EffectBlog';
import Footer from './one/Footer';

/**
 * Build primary element through router comp
 * @returns Primary Element
 */
function App() {

  return (
    <Container id="containerElement" style={{display: "flex", position: "absolute", left: "0", right: "0", top: "0", bottom: "0", overflowY: "auto", flexDirection: "column",  maxWidth: "100%", width: "100%", maxHeight: "auto", height: "100%", padding: "0", alignItems: "center", margin: "0", maxHeight: "100%"}}>
      <CustomNavbar />
      <div id="home" style={{height: "100%", width: "100%", backgroundColor: "black"}}>
        <Home />
      </div>
      <div id="about_page" style={{height: "100%", width: "100%"}}>
        <AboutUs style={{width: "100%"}}/>
      </div>
      <div id="services">
      <Services style={{height: "100%", width: "100%"}}/>
      </div>
      <div id="blog" style={{height: "100%", width: "100%"}}>
        <EffectBlog style={{height: "100%", width: "100%"}}/>
      </div>
      <div id="contact" style={{height: "100%", width: "100%"}}>
        <Footer style={{height: "auto", width: "auto"}}/>
      </div>
    </Container>  
  );
}

export default App;
