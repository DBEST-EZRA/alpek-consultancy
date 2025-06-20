import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCalculator,
  FaFileInvoice,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    icon: (
      <FaCalculator size={40} className="mb-3" style={{ color: "#b81a24" }} />
    ),
    title: "Accounting Services",
    description:
      "Reliable accounting solutions tailored to ensure financial clarity, compliance, and informed decision-making",
    benefits: [
      "Monthly Statutory Returns",
      "Bank Reconciliation",
      "Book Keeping Services",
      "Tally Training and Integration",
      "Quickbooks Training and Integration",
      "Sage & Xero Training and Integration",
    ],
  },
  {
    icon: (
      <FaFileInvoice size={40} className="mb-3" style={{ color: "#b81a24" }} />
    ),
    title: "Company Registration",
    description:
      "Quick, compliant, and hassle-free company registration services to help you legally establish your business in Kenya.",
    benefits: [
      "Limited Company Registration",
      "Change of Shareholders",
      "Conversion of Business name to Ltd Company",
      "AGPO Certificate",
      "IFMIS Registration",
      "Tender Filing Process",
      "Business Name Registration",
    ],
  },
  {
    icon: (
      <FaChartLine size={40} className="mb-3" style={{ color: "#b81a24" }} />
    ),
    title: "Tax Services",
    description:
      "Strategic tax planning and preparation services to minimize liability and ensure KRA compliance",
    benefits: [
      "Tax Advisory",
      "Tax Planning",
      "Tax Filing",
      "E-Tims Registration",
      "Individual Returns",
      "E-Tims Invoicing",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5 bg-light w-100">
      <Container>
        <div className="text-center mb-5">
          <span className="badge mb-2" style={{ background: "#b81a24" }}>
            Our Expertise
          </span>
          <h2 className="fw-bold">Comprehensive Accounting Solutions</h2>
          <p className="text-muted">
            Professional services designed to streamline your finances and
            ensure compliance
          </p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="shadow-sm h-100 border-0 text-center">
                <Card.Body>
                  {service.icon}
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <h6 className="fw-bold mt-4">Key Benefits:</h6>
                  <ul className="list-unstyled text-start">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="mb-1">
                        <FaCheckCircle className="text-warning me-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
