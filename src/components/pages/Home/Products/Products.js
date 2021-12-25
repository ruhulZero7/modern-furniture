import React from "react";
import "./Product.css";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/furnitures.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container className="product-container">
      <h2 className="my-5" style={{ color: "#f85f13" }}>
        POPULAR FURNITURE
      </h2>
      <Row lg={2} md={2} sm={2} xs={1} className="g-4">
        {products.slice(0, 6).map((product) => (
          <SingleProduct key={product.key} product={product}></SingleProduct>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
