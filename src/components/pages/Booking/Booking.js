import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../shared_components/Footer/Footer";
import Header from "../../shared_components/Header/Header";
import "./Booking.css";

const Booking = () => {
  const { user, isLoading } = useAuth();
  const { furnitureId } = useParams();
  const [furniture, setFurniture] = useState({});

  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.status = `Pending`;
    data.productName = furniture.name;
    axios.post("http://localhost:5000/Orders", data).then((res) => {
      if (res.data.insertedId) {
        // order successfull modal
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/products/${furnitureId}`)
      .then((res) => res.json())
      .then((data) => {
        setFurniture(data);
      });
  }, []);

  return (
    <Box>
      <Header />
      <Container className="mb-5">
        <h2 className="text-warning text-center py-5">
          Purchase your dream furniture{" "}
        </h2>
        <Row md={2} sm={1} xs={1} className="purchase-furniture-container">
          <Col className="col-md-7 mb-3 furniture-detail-info">
            <Row className="furniture-detail-container">
              <Col className="text-center  col-md-5 ">
                <img
                  src={furniture?.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </Col>
              <Col className="col-md-7">
                <div className="furnitured-body">
                  <h5 className="furnitured-title ">
                    Furniture Name: {furniture?.name}
                  </h5>
                  <p className="furniture-text my-4">{furniture?.detail}</p>
                  <span className="d-flex border furniture-rating">
                    <div>
                      <span>{furniture?.star} </span>
                      <Rating
                        initialRating={`${furniture?.star}`}
                        readonly
                        fullSymbol="fas fa-star text-warning"
                        emptySymbol="far fa-star"
                      ></Rating>
                    </div>
                    <b className="ms-auto text-warning">
                      Price: ${furniture?.price}
                    </b>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="col-md-4 furniture-detail-form">
            <h4 className="text-center"> Give us your details please</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
                placeholder="Your Name"
              />
              <input
                defaultValue={user?.email}
                {...register("email", { required: true })}
                placeholder="Your Email"
              />

              <textarea
                className="address-field"
                {...register("address", { required: true, maxLength: 100 })}
                placeholder="Your Address"
              />
              <input
                type="number"
                {...register("phone")}
                placeholder="Phone Number"
              />
              <input
                type="submit"
                className="btn btn-warning"
                value="Place Order"
              />
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Box>
  );
};

export default Booking;
