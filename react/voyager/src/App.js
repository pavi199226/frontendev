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
function App() {
  return (
    <div className="App ">
      <Navbar sticky="top" bg="primary" variant="light">
        <img src={logo} className="Bimg" />

        <Nav className="mr-auto">
          <NavDropdown title="Menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#about">About us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#features">Bon voyage</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <header className="page-section masthead " id="home">
        <div className="container d-flex  flex-column">
          <h1 className="text-primary">Welcome to Voyager</h1>
        </div>
      </header>

      <section className="page-section " id="about">
        <div className="container d-flex bg-primary ">
          <h2>
            Are you a travel enthusiast?
            <br /> Don't know where to start? <br />
            We have got you covered.
            <br />
            Ready to get your passports bruised. <br />
            You're in for a thrilling ride.
          </h2>
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
