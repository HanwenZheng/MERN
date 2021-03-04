import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import styles from "./Navigator.module.scss";

class Navigator extends Component {
  render() {
    return (
      <div className={styles.outer}>
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className={styles.logo}>
            Alex Zheng
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto text-white">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Work</Nav.Link>
              <NavDropdown className="fadein" title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigator;
