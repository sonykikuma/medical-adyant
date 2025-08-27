import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Slider = () => {
  return (
    <Container className="my-4">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1687180948630-2780c8b3f7f6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Yoga Slide"
          />
          <Carousel.Caption>
            <h3>Yoga</h3>
            <p>The best way to health and fitness.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ayurveda Slide"
          />
          <Carousel.Caption>
            <h3>Ayurvedic Healing</h3>
            <p>Embrace Ayurveda for a healthier life.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.cardio.com/wp-content/uploads/2023/11/heart-attack.webp"
            // src="https://plus.unsplash.com/premium_photo-1681996319124-f8704fc758ca?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wellness Slide"
          />
          <Carousel.Caption>
            <h3>Wellness</h3>
            <p>Balance your body, mind, and spirit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1650044252595-cacd425982ff?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Herbal Slide"
          />
          <Carousel.Caption>
            <h3>Herbal Therapy</h3>
            <p>Natural solutions for everyday health.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
