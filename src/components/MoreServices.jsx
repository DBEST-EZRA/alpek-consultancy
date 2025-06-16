import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUserTie, FaBriefcase, FaCogs } from "react-icons/fa";
import "./MoreServices.css";

const moreServices = [
  {
    title: "HR Payrolls",
    icon: <FaUserTie size={40} className="mb-3 text-danger" />,
    description: "Simplified and accurate payroll solutions for your team.",
    list: ["HR Audits", "HR Planning", "HR Advisory", "Payroll Management"],
  },
  {
    title: "Business Registration",
    icon: <FaBriefcase size={40} className="mb-3 text-danger" />,
    description: "Start your business officially with proper documentation.",
    list: [
      "Sole Proprietorship",
      "Partnership",
      "Limited Companies",
      "E-Returns",
    ],
  },
  {
    title: "Business Plans & POS Systems",
    icon: <FaCogs size={40} className="mb-3 text-danger" />,
    description: "Smart tools and strategies for scaling your business.",
    list: [
      "Custom Business Plans",
      "POS Software Setup",
      "Inventory Integration",
    ],
  },
];

const MoreServices = () => {
  return (
    <section id="more-services" className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <span className="badge bg-warning text-dark mb-2">More Services</span>
          <h2 className="fw-bold">Explore More of What We Offer</h2>
          <p className="text-muted">
            Additional expert services to support your business success.
          </p>
        </div>
        <Row>
          {moreServices.map((service, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front">
                    {service.icon}
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.description}</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back">
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <ul className="list-unstyled">
                      {service.list.map((item, i) => (
                        <li key={i} className="mb-2">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MoreServices;
