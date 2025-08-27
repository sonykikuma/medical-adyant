// import React from "react";
// import { Container, Carousel, Card } from "react-bootstrap";

// const GoogleReviews = () => {
//   const reviews = [
//     {
//       name: "Radhika Rao",
//       time: "4 months ago",
//       rating: 5,
//       text: "Homely atmosphere, best massage and relaxing always.",
//     },
//     {
//       name: "Babitha Jain",
//       time: "4 months ago",
//       rating: 5,
//       text: "Excellent treatment with very professional doctors.",
//     },
//     {
//       name: "Swathi VR",
//       time: "4 months ago",
//       rating: 5,
//       text: "Detox and massage therapy at this centre was very good. Prices are reasonable.",
//     },
//   ];

//   return (
//     <Container className="py-5">
//       <h2 className="fw-bold text-center mb-4" style={{ color: "#7a5c2e" }}>
//         Google Reviews
//       </h2>
//       <Carousel indicators={false}>
//         {reviews.map((review, index) => (
//           <Carousel.Item key={index}>
//             <Card
//               className="p-3 shadow-sm mx-auto"
//               style={{ maxWidth: "500px" }}
//             >
//               <Card.Body>
//                 <h5>⭐⭐⭐⭐⭐ ({review.rating})</h5>
//                 <p className="mb-1">{review.text}</p>
//                 <small className="text-muted">
//                   - {review.name}, {review.time}
//                 </small>
//               </Card.Body>
//             </Card>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </Container>
//   );
// };

// export default GoogleReviews;

import React from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Radhika Rao",
      time: "4 months ago",
      rating: 5,
      text: "Homely atmosphere, best massage and relaxing always.",
    },
    {
      name: "Babitha Jain",
      time: "4 months ago",
      rating: 5,
      text: "Excellent treatment with very professional doctors.",
    },
    {
      name: "Swathi VR",
      time: "4 months ago",
      rating: 5,
      text: "Detox and massage therapy at this centre was very good. Prices are reasonable.",
    },
    {
      name: "Kiran Sharma",
      time: "2 months ago",
      rating: 5,
      text: "Doctors are very knowledgeable and supportive. Highly recommend!",
    },
    {
      name: "Megha Gupta",
      time: "1 month ago",
      rating: 4,
      text: "Good service, staff is very polite and caring.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-4" style={{ color: "#7a5c2e" }}>
        Google Reviews
      </h2>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        showDots={false}
        arrows
        containerClass="carousel-container"
        itemClass="px-3"
      >
        {reviews.map((review, index) => (
          <Card key={index} className="p-3 shadow-sm h-100">
            <Card.Body>
              <h5>⭐⭐⭐⭐⭐</h5>
              <p className="mb-1">{review.text}</p>
              <small className="text-muted">
                - {review.name}, {review.time}
              </small>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default GoogleReviews;
