import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../shared_components/Footer/Footer';
import Header from '../../shared_components/Header/Header';
import SingleProduct from '../Home/SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch('https://modern-furniture-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header />
      <Container className="product-container mb-5">
        <h2 className="mt-5 border-lf">OUR ALL PRODUCT</h2>
        {products.length ? (
          <div>
            <div className="underline mb-5"></div>
            <Row lg={2} md={2} sm={2} xs={1} className="g-4">
              {products.map((product) => (
                <SingleProduct
                  key={product.key}
                  product={product}
                ></SingleProduct>
              ))}
            </Row>
          </div>
        ) : (
          <div id="spinner">
            <button
              className="btn btn-warning spinner-btn"
              type="button"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default AllProducts;
