import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

const NavbarMenu = () => {
  return (
    <>
      <Navbar
        // bg="light"
        expand="lg"
        className="shadow-sm mb-3"
        style={{ backgroundColor: "#a38856", color: "white" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <span>
              <img
                src="/logo2.png"
                alt=""
                width="30"
                height="30"
                className="rounded-3"
              />{" "}
            </span>
            Dhanvantari चिकित्सा
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
            style={{ backgroundColor: "#a38856" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel-expand-lg"
                className="text-white"
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Specialities</Nav.Link>
                <Nav.Link href="/">Yoga</Nav.Link>
                <NavDropdown
                  title="About Us"
                  id="about-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/about">Our Mission</NavDropdown.Item>
                  <NavDropdown.Item href="/contact">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <Nav.Link href="/">Shop</Nav.Link>
                <NavDropdown
                  title="Our Branches"
                  id="branches-dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/">Bangalore</NavDropdown.Item>
                  <NavDropdown.Item href="/">Jabalpur</NavDropdown.Item>
                  <NavDropdown.Item href="/">Delhi</NavDropdown.Item>
                </NavDropdown> */}

                <Nav.Link href="/">Blog</Nav.Link>
                <Nav.Link href="/">Book Appointment</Nav.Link>
              </Nav>
              <hr className="sidebar-divider" />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
