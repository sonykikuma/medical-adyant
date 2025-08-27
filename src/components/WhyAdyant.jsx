import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const WhyAdyant = () => {
  return (
    <div style={{ padding: "60px 0" }}>
      <Container>
        {/* Why Adyant Ayurveda */}
        <h2 className="fw-bold text-center mb-5" style={{ color: "#7a5c2e" }}>
          Why Dhanvantari Rishi ?
        </h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>
                <strong>Highly rated</strong> on Google and other platforms as
                best Ayurveda hospital in Central India
              </li>
              <li>
                We provide the <strong>best ayurvedic treatment</strong> in
                Jabalpur customized according to your need
              </li>
              <li>Result-oriented wellness programme</li>
              <li>Full-time support from our doctors</li>
              <li>24+ years of expertise in Ayurveda</li>
              <li>Experienced team of doctors</li>
              <li>100% authentic Ayurvedic treatment</li>
              <li>Multiple locations near to your home in Bangalore</li>
              <li>
                <a href="/consultation" style={{ color: "#0056b3" }}>
                  Online consultation
                </a>
              </li>
              <li>
                Frequent reviews to monitor your progress and modify plans if
                required
              </li>
            </ul>
          </Col>
        </Row>

        {/* Awards Section */}
        <h3
          className="fw-bold mt-5 mb-4 text-center"
          style={{ color: "#7a5c2e" }}
        >
          Awards and Recognitions
        </h3>

        <Row className="justify-content-center">
          <Col md={8}>
            <Carousel interval={3000} pause="hover">
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded shadow-sm"
                  src="https://adyantayurveda.com/wp-content/uploads/2025/01/Excellence-in-Panchakarma-Treatment-Award-by-Times-Health-1024x341.jpg"
                  alt="Award 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded shadow-sm"
                  src="https://adyantayurveda.com/wp-content/uploads/2025/01/Excellence-in-Panchakarma-Treatment-Award-by-Times-Health-1024x341.jpg"
                  alt="Award 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded shadow-sm"
                  src="https://adyantayurveda.com/wp-content/uploads/2025/01/Excellence-in-Panchakarma-Treatment-Award-by-Times-Health-1024x341.jpg"
                  alt="Award 3"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyAdyant;
