import React from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import Api from "./components/Api";
import Homepage from "./components/Hompepage";
import Logo from "./vlogo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Hompepage from "./components/Hompepage";
import Fetch from "./Fetch";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./vlogo.svg";
import dev1 from "./Photo.jpeg";
function App() {
  return (
    <div className="App ">
      <Navbar sticky="top" bg="dark" variant="dark">
        <img src={logo} className="Bimg" />
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#about">About us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#features">Bon voyage</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#developers">Developers</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Brand href="#home">Voyager</Navbar.Brand>
      </Navbar>
      <header className="page-section masthead " id="home">
        <div className="container d-flex  flex-column"></div>
      </header>

      <section className="page-section " id="about">
        <div className="container d-flex bg-light ">
          <div class="row">
            <div class="col-lg-6">
              <p style={{ fontSize: "30px", textAlign: "justify" }}>
                Voyager provides you a collection of 'must-visit' places in a
                particular region.We serve as a travel assistant and provide you
                the best suggestions in and around the city that you want to
                visit.Believe us , our recommendations are top-notch.
              </p>
            </div>

            <div class="col-lg-6">
              <p style={{ fontSize: "30px", textAlign: "justify" }}>
                In addition to our recommendations, we also provide you the bare
                essentials that you need in the city. What are you waiting for?
                get ready to bruise your passports.We will help you make
                lifetime memories. Lets get you started right away.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section " id="features">
        <div className="container d-flex  flex-column">
          <Fetch />
        </div>
      </section>
      <section id="developers">
        Our developers
        <div>
          <img
            src={dev1}
            className="Bimg"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "55px",
              marginLeft: "-400px",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
