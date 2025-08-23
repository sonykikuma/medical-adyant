import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HeroSection = () => (
  <Container fluid className="my-4">
    <Row className="align-items-center">
      <Col md={12} className="text-center">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681996319124-f8704fc758ca?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ayurveda for Better Cardiac Health"
          fluid
          className="shadow rounded"
        />
        <p className="mt-3 fst-italic">
          Explore Ayurveda for better cardiac health. Learn about herbs, yoga,
          and holistic practices for a resilient heart. Embrace well-being the
          Ayurvedic way!
        </p>
      </Col>
    </Row>
  </Container>
);

export default HeroSection;
