import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import "./navbar.css"
import { useState } from "react";
function Navy() {
  const [theme, setTheme] = useState<string>("light");

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.body.classList.remove("light", "dark", "soft");
    document.body.className= newTheme;
  }
  return (
    <Navbar expand="lg" className={`navbar-layout ${theme}`}>
      <Container fluid>
        <Navbar.Brand href="#">Erat Qurânî</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Surah</Nav.Link>
            <Nav.Link href="#action3">Cuz</Nav.Link>
         
          </Nav>

          <NavDropdown className="right-nav-circle" title={<IoColorPaletteOutline />}>
          <NavDropdown.Item onClick={() => (handleThemeChange("light"))}>Light</NavDropdown.Item>
          <NavDropdown.Item onClick={() => (handleThemeChange("dark"))}>Dark</NavDropdown.Item>
          <NavDropdown.Item onClick={() => (handleThemeChange("soft"))}>Soft</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="right-nav-circle" href="#action10"><FaRegUser />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navy;
