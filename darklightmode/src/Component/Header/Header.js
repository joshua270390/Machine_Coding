import Topbar from "../Topbar/Topbar";
// import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";
import { useTheme } from "../../theme-context";

function Header() {

  const{theme,toggleTheme}=useTheme()
  return (
    <>
      {/* <Topbar /> */}
      <Container>
        <Navbar bg="light" expand="lg" variant="light" id="navbar-id">
          <Navbar.Brand href="#">
            <img src={logo} alt="" className="navbrand-img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/board-of-directors">Website Design</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/our-team">Social Media</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/certifications">PPC</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/careers">SEO</Link>
                </NavDropdown.Item>
              </NavDropdown>
              
{/* <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> */}
              <Link to="/clientele">Clientele</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>

              

            </Nav>
          </Navbar.Collapse>

          <div className="switch-mode"><label><input type="checkbox" onChange={toggleTheme} checked={theme == "dark"}/><span className="sliderround"></span></label></div>
        </Navbar>
        
      </Container>
    </>
  );
}

export default Header;
