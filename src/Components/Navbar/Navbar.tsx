import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import "./navbar.css"
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar-layout">
      <Container fluid>
        <Navbar.Brand href="#">FKE Reading Quran</Navbar.Brand>
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
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav.Link className="right-nav-circle" href="#action10"><IoColorPaletteOutline /></Nav.Link>
          <Nav.Link className="right-nav-circle" href="#action10"><FaRegUser />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
