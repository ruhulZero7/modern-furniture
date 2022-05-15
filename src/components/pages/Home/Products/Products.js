import React from "react";
import "./Product.css";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://murmuring-ravine-72524.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Container className="product-container">
      <h2 className="mt-5 border-lf">POPULAR FURNITURE</h2>
      {products?.length ? (
        <div>
          <div className="underline mb-5"></div>
          <Row lg={2} md={2} sm={2} xs={1} className="g-4">
            {products.slice(0, 6).map((product) => (
              <SingleProduct
                key={product.key}
                product={product}
              ></SingleProduct>
            ))}
          </Row>
          <div className="text-center m-5">
            <Link to="/all-products">
              <button className="btn btn-warning">VIEW OUR STORE</button>
            </Link>
          </div>
        </div>
      ) : (
        <div id="spinner">
          <button class="btn btn-warning spinner-btn" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      )}
    </Container>
  );
};

export default Products;
