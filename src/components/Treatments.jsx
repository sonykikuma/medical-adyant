import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaHeartbeat,
  FaFemale,
  FaHandSparkles,
  FaBone,
  FaWheelchair,
} from "react-icons/fa";
import { GiBackPain, GiMeditation, GiStomach } from "react-icons/gi"; //GiThyroid
import { RiHealthBookLine } from "react-icons/ri";
import { MdOutlineBloodtype } from "react-icons/md";
import { BsCapsule } from "react-icons/bs";

const treatments = [
  { title: "HYPERTENSION", icon: <FaHeartbeat size={50} /> },
  { title: "PCOD", icon: <FaFemale size={50} /> },
  { title: "PSORIASIS", icon: <FaHandSparkles size={50} /> },
  { title: "OSTEOARTHRITIS", icon: <FaBone size={50} /> },
  { title: "BACK PAIN", icon: <GiBackPain size={50} /> },
  { title: "PARALYSIS", icon: <FaWheelchair size={50} /> },
  { title: "RHEUMATOID ARTHRITIS", icon: <RiHealthBookLine size={50} /> },
  { title: "STRESS MANAGEMENT", icon: <GiMeditation size={50} /> },
  //   { title: "HYPO/HYPER THYROIDISM", icon: <GiThyroid size={50} /> },
  { title: "CHOLESTEROL MANAGEMENT", icon: <MdOutlineBloodtype size={50} /> },
  { title: "DIABETES MELLITUS", icon: <BsCapsule size={50} /> },
  { title: "DIGESTIVE DISORDERS", icon: <GiStomach size={50} /> },
];

const Treatments = () => {
  return (
    <div
      className="mt-0"
      style={{ backgroundColor: "#faf6f2", padding: "60px 0" }}
    >
      <Container className="my-3 text-center">
        <h3 className=" mb-4" style={{ color: "#7a5c2e" }}>
          Dhanvantari - Get Best Ayurvedic Treatment in Jabalpur
        </h3>
        <h2
          className="fw-bold text-uppercase mb-4"
          style={{ color: "#7a5c2e" }}
        >
          What We Treat
        </h2>
        <Row>
          {treatments.map((treatment, index) => (
            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
              <div className="p-3">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "2px solid #a38856",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px",
                    color: "#a38856",
                  }}
                >
                  {treatment.icon}
                </div>
                <h6 className="fw-bold">{treatment.title}</h6>
                <Button
                  variant="secondary"
                  size="sm"
                  style={{ backgroundColor: "#a38856", border: "none" }}
                >
                  Know More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Treatments;
