import React, { Component, useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import styles from "./MainMenu.module.scss";

import { CSSTransition } from "react-transition-group";
import easeIn from "../../Effect/easeIn.module";

function MainMenu() {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  const mainMenu = (
    <div className={styles.outer}>
      <Navbar expand="lg">
        <Navbar.Brand href="/" className={styles.logo}>
          Alex Zheng
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-white">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="link">Work</Nav.Link>
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

  return (
    <div>
      <CSSTransition in={inProp} timeout={2000} classNames={easeIn}>
        {mainMenu}
      </CSSTransition>
    </div>
  );
}

export default MainMenu;
