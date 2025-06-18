import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle, FaArrowDown } from "react-icons/fa";
import "./HeroSection.css"; // Ensure your CSS is linked

const HeroSection = () => {
  const features = [
    "Accounting Services",
    "Tax Services",
    "Company Registration",
    "Business Registration",
    "HR Payrolls",
    "Business Plans & POS Systems",
  ];

  return (
    <div className="position-relative min-vh-100 bg-black text-white d-flex align-items-center">
      {/* Background Image */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <img
          src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/3/background.png"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Content */}
      <div className="container position-relative z-1 text-center text-lg-start">
        <div className="col-lg-8 mx-auto mx-lg-0">
          <span className="badge bg-warning text-dark fs-6 mb-3">
            CPA CERTIFIED PROFESSIONAL
          </span>

          <h1 className="display-5 fw-normal">
            Expert CPA Services for{" "}
            <span style={{ color: "#FFA500" }}>Kenyan Businesses</span>
          </h1>

          <p className="mt-3 text-white-50 fs-5">
            Professional Accounting, Tax and Business Services Delivered
            Remotely.
          </p>

          {/* Feature List */}
          <div className="row text-start mt-4 gx-4 gy-3">
            {features.map((item, index) => (
              <div
                className="col-6 col-md-4 d-flex align-items-start gap-2"
                key={index}
              >
                <FaCheckCircle color="#FFC107" className="mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-5">
            <a href="#" className="btn btn-light text-black rounded-pill px-4">
              Get Free Consultation
            </a>
            <a
              href="#"
              className="btn btn-outline-light rounded-pill d-flex align-items-center px-4"
            >
              View Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 z-2">
        <FaArrowDown className="text-warning fs-2 bounce-arrow" />
      </div>
    </div>
  );
};

export default HeroSection;
