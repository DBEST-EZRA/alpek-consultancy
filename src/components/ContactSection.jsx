import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Modal,
  Spinner,
} from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { db } from "./Config.js"; // adjust if needed
import { collection, addDoc } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: ensure all fields are filled
    const { name, email, phone, service, message } = formData;
    if (!name || !email || !phone || !service || !message) {
      alert("Please fill all fields.");
      return;
    }

    setIsLoading(true);
    try {
      await addDoc(collection(db, "messages"), formData);
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setShowErrorModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        style={{ opacity: 0.8 }}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        style={{ opacity: 0.8 }}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 XXX XXX XXX"
                        required
                        style={{ opacity: 0.8 }}
                      />
                    </Col>
                    <Col>
                      <Form.Select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        style={{ opacity: 0.8 }}
                      >
                        <option value="">Select a service</option>
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your accounting needs..."
                      required
                      style={{ opacity: 0.8 }}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    variant="warning"
                    className="w-100 fw-bold text-dark d-flex justify-content-center align-items-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                        />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you! We’ve received your message. We’ll get back to you shortly.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowSuccessModal(false)}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Error Modal */}
      <Modal
        show={showErrorModal}
        onHide={() => setShowErrorModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Submission Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Oops! Something went wrong. Please try again later.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactSection;
