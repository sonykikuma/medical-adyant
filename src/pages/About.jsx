import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import NavbarMenu from "../components/NavBarMenu";
import { ListGroup } from "react-bootstrap";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavbarMenu />
      <Container className="my-5">
        {/* Page Title */}
        <Row className="mb-4">
          <Col>
            <h2 className="text-center text-success fw-bold">
              Adyant Ayurveda: Best Ayurvedic Doctors in Bangalore | Ayurveda
              Clinic Bangalore
            </h2>
          </Col>
        </Row>

        {/* About Section */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title className="text-success">
              About Adyant Ayurveda
            </Card.Title>
            <Card.Text>
              Adyant Ayurveda is a leading chain of Ayurvedic clinics in
              Bangalore, renowned for combining ancient Ayurvedic wisdom with
              modern healthcare practices. With over{" "}
              <strong>25 years of expertise</strong>, we are committed to
              providing authentic and effective Ayurvedic treatments.
            </Card.Text>
            <Card.Text>
              Our <strong>ISO 9001</strong> and <strong>ISO 10002</strong>{" "}
              certifications reflect our dedication to quality and patient
              satisfaction. All Adyant Ayurveda clinics are
              <strong> KPME licensed</strong> and recognized, ensuring
              compliance with the highest standards of medical practice.
            </Card.Text>
            <Card.Text>
              In 2024, Adyant Ayurveda achieved two prestigious awards: These
              awards reflect our unwavering commitment to providing authentic
              and effective Ayurvedic care.
            </Card.Text>

            {/* <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Ayush Award:</strong> Honored as “Best Ayurvedic Clinic
                in Bangalore.”
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Times Health Award:</strong> Recognized for “Excellence
                in Panchakarma treatment.”
              </ListGroup.Item>
            </ListGroup> */}

            <ul
              className="ps-3 mb-2"
              style={{
                paddingLeft: "1.2rem",
                marginLeft: "0",
                listStyle: "none",
              }}
            >
              <li>
                <strong>Ayush Award:</strong> Honored as “Best Ayurvedic Clinic
                in Bangalore.”
              </li>
              <li>
                <strong>Times Health Award:</strong> Recognized for “Excellence
                in Panchakarma treatment.”
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Mission Section */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title className="text-success">Our Mission</Card.Title>
            <Card.Text>
              To offer the highest quality Classical Ayurveda medicines and
              treatments, in partnership with a 100-year-old Ayurvedic
              manufacturing company. We are driven by the vision{" "}
              <em>“सर्वे सन्तु निरामयाः” (Let all be healthy).</em>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title className="text-success">
              Why Choose Adyant Ayurveda?
            </Card.Title>
            <ul className="ps-3" style={{ listStyle: "none" }}>
              <li>
                <strong>Authentic Treatments:</strong> Our treatments adhere to
                traditional Ayurvedic methods, ensuring authenticity and
                effectiveness.
              </li>
              <li>
                <strong>Expert Practitioners:</strong> Our team of highly
                qualified physicians and therapists offers personalized care
                based on individual body constitution and seasonal variations.
              </li>
              <li>
                <strong>Comprehensive Services:</strong> From spine and joint
                care to weight management, skin treatments, and more, we offer a
                wide range of Ayurvedic therapies.
              </li>
              <li>
                <strong>Home Care Services:</strong> Enjoy the benefits of
                Ayurvedic treatments in the comfort of your home, with our fully
                equipped mobile service.
              </li>
            </ul>
          </Card.Body>
        </Card>

        {/* Specialized Treatments */}
        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title className="text-success">
              Specialized Ayurvedic Treatments at Adyant Ayurveda
            </Card.Title>
            <Card.Text>
              Ayurveda, the ancient system of medicine, offers treatments for a
              wide range of conditions. At Adyant Ayurveda, we provide
              specialized therapies for:
            </Card.Text>
            <ul className="ps-3" style={{ listStyle: "none" }}>
              <li>Spine & Joint Care</li>
              <li>Weight Management</li>
              <li>Skin & Hair Treatments</li>
              <li>Mental Wellness</li>
              <li>Cardiac & Lifestyle Disorders</li>
              <li>Digestive Health</li>
              <li>And many more...</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default About;
