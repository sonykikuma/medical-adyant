import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const advisors = [
  {
    name: "Rachit Kumar Tripathi",
    role: "Director",
    description:
      "Provides strategic leadership and ensures Dhanvantari चिकित्सा stays true to its mission of holistic healing.",
    image: "./dr.rachit.jpeg",
  },
  {
    name: "Advocate Aarti Tripathi",
    role: "Legal Advisor",
    description:
      "Oversees compliance, legal frameworks, and ensures all treatments and practices meet government regulations.",
    image: "./aartilawyer.jpeg",
  },
  {
    name: "Mr. Deepak Soni",
    role: "Marketing Advisor",
    description:
      "Leads outreach and awareness programs to spread authentic Ayurveda knowledge across India.",
    image: "./dr.rachit.jpeg",
  },
];

export default function AdvisorsSection() {
  return (
    <Container className="my-5">
      <h2 className="text-success text-center mb-5">
        Our Advisors & Leadership
      </h2>

      {advisors.map((advisor, index) => (
        <Row key={index} className="align-items-center mb-5">
          {/* Text first if even, image first if odd */}
          <Col md={6} className={`mb-3 ${index % 2 === 0 ? "" : "order-md-2"}`}>
            <h4 className="text-success">{advisor.name}</h4>
            <h6 className="text-muted">{advisor.role}</h6>
            <p>{advisor.description}</p>
          </Col>

          <Col
            md={6}
            className={`${index % 2 === 0 ? "" : "order-md-1"} text-center`}
          >
            <img
              src={advisor.image}
              alt={advisor.name}
              className="img-fluid  shadow"
              style={{ height: "250px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      ))}
    </Container>

    // <Card className="my-4 shadow-sm">
    //   <Card.Body>
    //     <Card.Title className="text-success text-center mb-4">
    //       Our Advisors & Leadership
    //     </Card.Title>

    //     <div className="d-flex flex-column align-items-center gap-4">
    //       {advisors.map((advisor, index) => (
    //         <Card
    //           key={index}
    //           className="text-center shadow-sm"
    //           style={{ width: "22rem" }} // fixed width to keep all cards aligned
    //         >
    //           <Card.Img
    //             variant="top"
    //             src={advisor.image}
    //             alt={advisor.name}
    //             style={{ height: "250px", objectFit: "cover" }}
    //           />
    //           <Card.Body>
    //             <Card.Title className="text-success">{advisor.name}</Card.Title>
    //             <Card.Subtitle className="mb-2 text-muted">
    //               {advisor.role}
    //             </Card.Subtitle>
    //             <Card.Text>{advisor.description}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       ))}
    //     </div>
    //   </Card.Body>
    // </Card>
  );
}

{
  /* <Row>
          {advisors.map((advisor, index) => (
            <Col md={4} key={index} className="mb-3">
              <Card className="h-100 text-center shadow-sm">
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={advisor.image}
                  alt={advisor.name}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-success">
                    {advisor.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {advisor.role}
                  </Card.Subtitle>
                  <Card.Text>{advisor.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */
}
