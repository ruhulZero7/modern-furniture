import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../shared_components/Header/Header";
import SingleProduct from "../Home/SingleProduct/SingleProduct";
import "./AllProduct.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/furnitures.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Header />
      <Container className="product-container">
        <h2 className="mt-5 uh" style={{ color: "#FF7004" }}>
          OUR ALL PRODUCT
        </h2>
        <div className="underline mb-5"></div>
        <Row lg={2} md={2} sm={2} xs={1} className="g-4">
          {products.map((product) => (
            <SingleProduct key={product.key} product={product}></SingleProduct>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
