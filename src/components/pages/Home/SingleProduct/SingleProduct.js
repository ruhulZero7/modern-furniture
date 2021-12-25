import React from "react";
import { Col } from "react-bootstrap";
import Rating from "react-rating";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { name, img, detail, star, brand, price } = props.product;
  return (
    <div>
      <Col className="main-card">
        <div className="mb-3" style={{ maxWidth: "560px" }}>
          <div className="row g-0 card-row">
            <div className="col-md-4 card-image">
              <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{detail.slice(0, 80)}</p>
                <div className="card-bottom">
                  <div>
                    <span>{star} </span>
                    <Rating
                      initialRating={`${star}`}
                      readonly
                      fullSymbol="fas fa-star text-warning"
                      emptySymbol="far fa-star"
                    ></Rating>
                  </div>
                  <span>Brand: {brand}</span>
                </div>
                <div className="card-bottom">
                  <div>
                    <b className="price">Price: ${price} </b>
                  </div>
                  <button className="btn btn-warning">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default SingleProduct;
