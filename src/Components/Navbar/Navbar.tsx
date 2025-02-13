import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import "./navbar.css";
import { useState, useEffect } from "react";

function Navy() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark", "soft");
    document.body.classList.add(theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Navbar expand="lg" className={`navbar-layout ${theme}`}>
      <Container fluid>
        <Navbar.Brand href="#" className="colorful-text">
          Erat Qurânî
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/">Anasayfa</Nav.Link>
            <Nav.Link href="/surah">Sûreler</Nav.Link>            
          </Nav>

          <NavDropdown
            className="right-nav-circle"
            title={<IoColorPaletteOutline />}
          >
            <NavDropdown.Item onClick={() => handleThemeChange("light")}>
              Açık
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleThemeChange("dark")}>
              Koyu
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleThemeChange("soft")}>
              Soft
            </NavDropdown.Item>
          </NavDropdown>

          {/*<NavDropdown className="right-nav-circle" title={<FaRegUser />}>
            <NavDropdown.Item>Profil</NavDropdown.Item>
            <NavDropdown.Item>Ayarlar</NavDropdown.Item>
            <NavDropdown.Item>Çıkış Yap</NavDropdown.Item>
          </NavDropdown>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navy;
