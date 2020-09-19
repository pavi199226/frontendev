import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Profile from "./Components/Profile";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <a href="/">PG</a>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link>
              {" "}
              <Link to="/">Profile</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/portfolio">Portfolio</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <a href="https://github.com/pavi199226">
              <FontAwesomeIcon
                className="mr-2 fawesome"
                icon={faGithub}
                size="lg"
                color="white"
              />
            </a>

            <a href="https://www.linkedin.com/in/pavi199226/">
              <FontAwesomeIcon
                className="mr-2 fawesome"
                icon={faLinkedinIn}
                size="lg"
                color="white"
              />
            </a>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
