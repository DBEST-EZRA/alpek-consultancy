import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";
import { FaStar, FaUserCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css"; // Optional: for extra styling

const testimonials = [
  {
    name: "Jane Mwangi",
    company: "Mwangi Traders",
    feedback:
      "ALPEK helped us streamline our accounting. Their team is incredibly professional and supportive!",
  },
  {
    name: "Samuel Kimani",
    company: "Kitech Ventures",
    feedback:
      "With ALPEK’s help, we finally got on top of our tax filing and now feel confident every quarter.",
  },
  {
    name: "Mercy Atieno",
    company: "Atieno Logistics",
    feedback:
      "Efficient, fast, and very knowledgeable. We now focus on growth while ALPEK handles the numbers.",
  },
  {
    name: "Peter Otieno",
    company: "Otieno Farms",
    feedback:
      "We’ve saved so much time and stress since switching to ALPEK for bookkeeping.",
  },
  {
    name: "Beatrice Wambui",
    company: "Wambui Designs",
    feedback: "The best accounting decision we ever made. Highly recommended!",
  },
];

const chunkArray = (arr, size) => {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(arr.slice(i, i + size));
    return acc;
  }, []);
};

const TestimonialsSection = () => {
  const isMobile = window.innerWidth < 768;
  const itemsPerSlide = isMobile ? 1 : 2;
  const groupedTestimonials = chunkArray(testimonials, itemsPerSlide);

  return (
    <section
      id="testimonials"
      className="py-5"
      style={{
        backgroundColor: "#f8f9fa", // light gray
        color: "#212529", // bootstrap default text color
      }}
    >
      <div className="text-center mb-5">
        <span className="badge bg-warning text-dark mb-2">
          Client Success Stories
        </span>
        <h2 className="fw-bold">What Our Clients Say</h2>
        <p className="text-muted">feedback of businesses we have helped grow</p>
      </div>

      <div className="container">
        <Carousel
          indicators={false}
          controls={false}
          interval={4000}
          pause={false}
        >
          {groupedTestimonials.map((group, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {group.map((testimonial, idx) => (
                  <Col key={idx} md={6} className="mb-4">
                    <Card
                      className="h-100 shadow-lg border-0"
                      style={{ minHeight: "220px" }}
                    >
                      <Card.Body>
                        <div className="d-flex align-items-center mb-2">
                          <FaUserCircle
                            size={40}
                            className="me-3"
                            style={{ color: "#b81a24" }}
                          />
                          <div>
                            <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                            <small className="text-muted">
                              {testimonial.company}
                            </small>
                          </div>
                        </div>
                        <div className="mb-2 text-warning">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                          ))}
                        </div>
                        <p className="text-muted">{testimonial.feedback}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
