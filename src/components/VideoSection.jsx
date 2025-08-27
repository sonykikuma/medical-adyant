import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#7a5c2e" }}>
        Our Achievements & Awards
      </h2>
      <Row className="justify-content-center">
        <Col md={6} className="mb-3">
          <video width="100%" controls>
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
        <Col md={6} className="mb-3">
          <video width="100%" controls>
            <source src="/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* <ReactPlayer
            url="https://www.youtube.com/embed/2PtO0q_EnS4"
            //   url="https://www.youtube.com/watch?v=2PtO0q_EnS4"

            width="100%"
            height="315px"
            controls
          /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoSection;
