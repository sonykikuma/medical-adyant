import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import { Container, Row, Col, Card } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HerbsList from "./components/HerbsList";
import HeroSection from "./components/HeroSection";
import NavbarMenu from "./components/NavbarMenu";
import Slider from "./components/Slider";
import Treatments from "./components/Treatments";
import WhyAdyant from "./components/WhyAdyant";
import VideoSection from "./components/VideoSection";
import GoogleReviews from "./components/GoogleReviews";
import ContactAddress from "./components/ContactAddress";

const Intro = () => (
  <Container className="my-4">
    <p>
      In the pulsating rhythm of life, our hearts stand as steadfast guardians
      of our well-being. Ayurveda, the ancient science of life, presents a
      holistic approach to maintaining a healthy heart...
    </p>
  </Container>
);

const Section = ({ title, text }) => (
  <Card className="mb-4 shadow-sm">
    <Card.Body>
      <Card.Title className="text-success">{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
);

function App() {
  return (
    <>
      <NavbarMenu />
      <Slider />
      <Treatments />
      <WhyAdyant />
      <VideoSection />
      <GoogleReviews />
      <ContactAddress />
      <Footer />
    </>
  );
}

export default App;

{
  /*<Intro />
      <HeroSection /> */
}
{
  /* <Container>
        <Row>
          <Col md={12}>
            <Section
              title="Understanding Cardiac Health in Ayurveda"
              text="Ayurveda sees the heart as the seat of consciousness and emotions... Balancing doshas ensures cardiovascular wellness."
            />
            <Section
              title="Ayurvedic Lifestyle for Heart Health"
              text="Heart-friendly diet with leafy greens, whole grains, turmeric, almonds, and walnuts. Morning routines with exercise and meditation support heart health."
            />
            <Section
              title="Herbal Support for the Heart"
              text="Arjuna, Triphala, Garlic, and Chyawanprash are powerful allies that support cardiovascular function."
            />
            <Section
              title="Yoga and Exercise in Ayurveda"
              text="Bhujangasana and Anulom Vilom strengthen the heart. Vata benefits from walking, Pitta from swimming, and Kapha from jogging."
            />
            <Section
              title="Stress Management in Ayurveda"
              text="Meditation, mindfulness, Ashwagandha, and Brahmi help reduce stress and protect heart health."
            />
            <HerbsList />
          </Col>
        </Row>
      </Container> */
}
