// src/components/DoctorsSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import doctors from "../data/doctors";

const DoctorsSection = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-5" style={{ color: "#7a5c2e" }}>
        Meet Our Expert Team – Best Ayurvedic Doctors in Bangalore
      </h2>
      {doctors.map((doc, index) => (
        <Row key={index} className="mb-5 align-items-center">
          {/* Text */}
          <Col md={8}>
            <h4 className="fw-bold">
              {doc.name}: {doc.title} at {doc.branch}
            </h4>
            <p>{doc.description}</p>

            <ul>
              {doc.expertise.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {doc.panchakarma && (
              <>
                <h6 className="fw-bold mt-3">Panchakarma Specialization:</h6>
                <ul>
                  {doc.panchakarma.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </Col>

          {/* Image */}
          <Col md={4} className="text-center">
            <Card className="shadow-sm border-0">
              <Card.Img
                src={doc.image}
                alt={doc.name}
                className="rounded"
                style={{ maxHeight: "280px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{doc.name}</Card.Title>
                <Card.Text className="text-muted">
                  {doc.experience} Experience
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default DoctorsSection;
