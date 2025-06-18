import React from "react";
import aboutImage from "../assets/lower.webp"; // Replace with your actual image path
import { FaCertificate } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <span
              className="badge text-dark mb-2"
              style={{ backgroundColor: "#d9d9d9" }}
            >
              About Us
            </span>
            <h2 className="fw-bold mb-3">Your Trusted Accounting Partner</h2>
            <p className="text-muted">
              ALPEK TAX AND ACCOUNTING Consultancy is dedicated to helping
              individuals, startups, and established businesses thrive by
              offering expert tax, accounting, and business registration
              services. With a deep understanding of Kenya's regulatory
              landscape, we provide tailored financial solutions that ensure
              compliance, efficiency, and long-term growth.
            </p>
            <p className="text-muted">
              Our mission is to simplify your financial processes, eliminate
              uncertainty, and empower you with the insights you need to make
              informed decisions. From tax filing to bookkeeping to strategic
              planning — we're with you every step of the way.
            </p>

            {/* CPA Certified Tag as Red Button */}
            <div className="mt-4">
              <button
                className="btn text-white rounded-pill d-inline-flex align-items-center"
                style={{ backgroundColor: "#b81a24", fontWeight: "500" }}
              >
                <FaCertificate className="me-2" />
                CPA Certified
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src={aboutImage}
              alt="About ALPEK"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
