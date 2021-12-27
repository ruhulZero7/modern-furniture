import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../shared_components/Footer/Footer";
import Header from "../../shared_components/Header/Header";
import SingleProduct from "../Home/SingleProduct/SingleProduct";
import "./AllProduct.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const { isLoading } = useAuth();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <Container className="product-container mb-5">
        <h2 className="mt-5 border-lf">OUR ALL PRODUCT</h2>
        <div className="underline mb-5"></div>
        <Row lg={2} md={2} sm={2} xs={1} className="g-4">
          {products.map((product) => (
            <SingleProduct key={product.key} product={product}></SingleProduct>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default AllProducts;
