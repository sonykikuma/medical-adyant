import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => (
  <footer className="bg-success text-light py-4 mt-5">
    <Container>
      <Row>
        {/* Contact Info */}
        <Col md={4} className="mb-3">
          <h5 className="text-uppercase">Contact</h5>
          <p className="mb-1">Dr. Prabhu Tiwari</p>
          <p className="mb-1">
            📍 Main Road Kundam Tehsil <br /> Kundam Village Sadafal Sadalfal
            Kundam
          </p>
          <p className="mb-1"> Jabalpur(Madhya Pradesh 483110), India</p>
          <p className="mb-1">📞 +9192442 85921</p>

          <p className="mb-1">📞 +91 98765 43210</p>
          <p className="mb-0">✉️ dhanvantarichikitsha@gmail.com</p>
        </Col>

        {/* Quick Links */}
        <Col md={4} className="mb-3 text-center">
          <h5 className="text-uppercase">Follow Us</h5>
          <div>
            <a
              href="https://facebook.com"
              className="text-light me-3"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-light me-3"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-light me-3"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-light"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </Col>

        {/* Copyright */}
        <Col md={4} className="mb-3 text-md-end text-center">
          <img
            src="./logo2.png"
            alt="logo"
            width="200"
            height="180"
            className="rounded-4"
          />
          {/* <h5 className="text-uppercase pt-3">© {new Date().getFullYear()} </h5> */}
          <p className="mb-0 pt-3">
            <strong>© {new Date().getFullYear()}</strong> Dhanvantari चिकित्सा .
            All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
