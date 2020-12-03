import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WishList from "./components/WishList";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./vlogo.svg";
import FontAwesome from "react-fontawesome";
import Fetch from "./Fetch";
function App() {
  return (
    <div className="App ">
      <Navbar sticky="top" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#about">About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#features">Bon voyage</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Navbar.Brand href="#home">
          <img alt="Home" src={logo} className="Bimg" />
          Voyager
        </Navbar.Brand>
      </Navbar>
      <header className="page-section masthead " id="home">
        <div className="container d-flex  flex-column"></div>
      </header>
      <section className="page-section  " id="about">
        <div className="container d-flex  ">
          <div className="row">
            <div className="col-lg-6">
              <p style={{ fontSize: "30px", textAlign: "justify" }}>
                Voyager provides you a collection of 'must-visit' places in a
                particular region.We serve as a travel assistant and provide you
                the best suggestions in and around the city that you want to
                visit.Believe us , our recommendations are top-notch.
              </p>
            </div>

            <div className="col-lg-6">
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
    </div>
  );
}

export default App;
