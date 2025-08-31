// src/components/DoctorsSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import doctors from "../data/doctors";

const DoctorsSection = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-5" style={{ color: "#7a5c2e" }}>
        Meet Our Expert Team – Best Ayurvedic Doctors in Central India
      </h2>
      {doctors.map((doc, index) => (
        <Row key={index} className="mb-5 align-items-center">
          {/* Text */}
          <Col md={8}>
            <h4 className="fw-bold">
              {doc.name}: {doc.title} at {doc.branch}
            </h4>
            <p>
              {" "}
              {index === 0 ? (
                <>
                  Dr. Akhilesh Dubey is a highly esteemed and{" "}
                  <strong className="text-success">
                    best rated practitioner
                  </strong>
                  , recognized as one of the{" "}
                  <strong className="text-success">
                    top doctors in Jabalpur
                  </strong>
                  . With over{" "}
                  <strong className="text-success">
                    24 years of experience
                  </strong>
                  , he has built a reputation for excellence and commitment to
                  holistic health. He is a reputed member of{" "}
                  <strong className="text-success">FESC</strong>,
                  <strong className="text-success"> FSCAE</strong>. <br />
                  He is consultant – Senior International Cardiologist.
                  <br /> He is director – department of Cardiology.
                </>
              ) : (
                doc.description
              )}
            </p>

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
