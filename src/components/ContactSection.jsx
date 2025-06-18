import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      className="text-light py-5"
      style={{
        background: "linear-gradient(135deg, #b81a24, #000428)",
        width: "100%",
      }}
      id="contact"
    >
      <Container>
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark mb-2">
            Get Started Today
          </span>
          <h2 className="fw-bold">Get Professional Accounting Help Today</h2>
          <p className="text-light">
            Ready to streamline your finances? Contact us for a free
            consultation
          </p>
        </div>
        <Row className="g-4">
          {/* Contact Form */}
          <Col md={6}>
            <Card
              className="text-dark border rounded-4 p-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.35)" }}
            >
              <h5 className="fw-bold mb-4">Send Us a Message</h5>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      placeholder="Your full name"
                      required
                      style={{ opacity: 0.8 }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="email"
                      placeholder="your@email.com"
                      required
                      style={{ opacity: 0.8 }}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col>
                    <Form.Control
                      placeholder="+254 XXX XXX XXX"
                      required
                      style={{ opacity: 0.8 }}
                    />
                  </Col>
                  <Col>
                    <Form.Select required style={{ opacity: 0.8 }}>
                      <option>Select a service</option>
                      <option>Tax Services</option>
                      <option>Accounting Services</option>
                      <option>Business Registration Services</option>
                      <option>HR Payrolls</option>
                      <option>Business Plans & POS Systems</option>
                      <option>Company Registration</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us about your accounting needs..."
                    required
                    style={{ opacity: 0.8 }}
                  />
                </Form.Group>
                <Button variant="warning" className="w-100 fw-bold text-dark">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col md={6}>
            <Card
              className="text-light border rounded-4 p-4 mb-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            >
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p>
                <FaPhoneAlt className="me-2" /> +254 705 194 260
              </p>
              <p>
                <FaEnvelope className="me-2" /> alpekconsultancy@gmail.com
              </p>
              <p>
                <FaMapMarkerAlt className="me-2" /> Serving all of Kenya
                remotely
              </p>
            </Card>

            {/* Business Hours */}
            <Card
              className="text-light border rounded-4 p-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
            >
              <h5 className="fw-bold mb-3">Business Hours</h5>
              <p>
                <FaClock className="me-2" /> 24/7
              </p>

              <p className="text-warning mt-3">
                <FaCheckCircle className="me-2" />
                Response within 24 hours guaranteed
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
