// src/components/TreatmentsSection.jsx
import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import treatments from "../data/treatments";

const TreatmentsSection = () => {
  return (
    <Container className="py-5">
      <h4 className="fw-bold mb-3">
        Specialized Ayurvedic Treatments at Adyant Ayurveda.
      </h4>
      <p>
        Ayurveda, the ancient system of medicine, offers treatments for a wide
        range of conditions. Here’s a list of diseases and conditions that we
        treat at Adyant Ayurveda:
      </p>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th style={{ width: "30%" }}>Category</th>
            <th>Disease/Condition</th>
          </tr>
        </thead>
        <tbody>
          {treatments.map((item, index) => (
            <tr key={index}>
              <td className="fw-bold">{item.category}</td>
              <td>
                <ul>
                  {item.conditions.map((disease, i) => (
                    <li key={i}>{disease}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TreatmentsSection;
