import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const HerbsList = () => (
  <Card className="mb-4 shadow-sm">
    <Card.Body>
      <Card.Title className="text-success">
        Ayurvedic Herbs and Their Benefits
      </Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>Arjuna:</strong> Strengthens the heart muscle, improves blood
          circulation.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Triphala:</strong> Detoxifies, aids digestion, promotes a
          healthy gut.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Garlic:</strong> Regulates cholesterol, lowers blood pressure.
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Tulsi:</strong> Antioxidant, protects the heart from oxidative
          stress.
        </ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>
);

export default HerbsList;
