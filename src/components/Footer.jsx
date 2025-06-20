import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h4 className="fw-bold text-white">
              <span className="text-warning">Alpek</span> Consultancy
            </h4>
            <p>
              Professional CPA services for Kenyan businesses. Expert
              accounting, bookkeeping, and tax solutions delivered remotely.
            </p>
            <button className="btn btn-warning btn-sm mt-2">
              CPA CERTIFIED
            </button>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold text-white">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold text-white">Our Services</h6>
            <ul className="list-unstyled">
              <li>Remote Bookkeeping</li>
              <li>General Accounting</li>
              <li>Tax Services</li>
              <li>Financial Consulting</li>
              <li>KRA Compliance</li>
              <li>Business Advisory</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold text-white">Contact Us</h6>
            <p>
              <FaPhoneAlt className="me-2" /> +254 705 194 260
            </p>
            <p>
              <FaEnvelope className="me-2" /> alpekconsultancy@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" /> Kenya (Remote Services)
            </p>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="d-flex justify-content-between flex-wrap text-secondary small">
          <div>
            &copy; {new Date().getFullYear()} Alpek Consultancy. All rights
            reserved.
          </div>
          <div>
            <a href="#" className="text-secondary me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
