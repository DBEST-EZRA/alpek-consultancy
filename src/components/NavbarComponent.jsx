import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavbarComponent = () => {
  const whatsappLink = `https://wa.me/254705194260?text=${encodeURIComponent(
    "Hello Alpek Tax & Consultancy Ltd"
  )}`;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="fw-bold fs-5">
          <span style={{ color: "#b81a24" }}>ALPEK</span>{" "}
          <span style={{ color: "#1e293b" }}>TAX & ACCOUNTING</span>
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Nav links */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2">
              About Us
            </Nav.Link>
            <Nav.Link href="#services" className="mx-2">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-2">
              Contact
            </Nav.Link>
          </Nav>

          {/* Right side: Phone and button */}
          <div className="d-flex align-items-center gap-3">
            <span className="text-danger fw-bold d-none d-md-block">
              +254 705 194 260
            </span>
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
              className="rounded-pill fw-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
