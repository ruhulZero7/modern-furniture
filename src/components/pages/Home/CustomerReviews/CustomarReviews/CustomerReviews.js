import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://modern-furniture-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container>
      <hr />
      <h2 className="my-5 border-lf">CUSTOMER REVIEWS</h2>
      <Row lg={4} md={4} sm={2} xs={1}>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReviews;
