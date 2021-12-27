import React, { useEffect, useState } from "react";
import "./Review.css";

import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { Paper } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { Maximize } from "@mui/icons-material";

const Review = () => {
  const { user } = useAuth();
  const [reviews, setReviews] = useState({});
  const { register, handleSubmit, reset, setValue } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        // order successfull modal
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thanks for review us",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    });
  };

  //   useEffect(() => {
  //     fetch(`https://shielded-dawn-55052.herokuapp.com/reviews/`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setReviews(data);
  //         setValue("name", user?.displayName);
  //       });
  //   }, []);

  return (
    <div className="review-form" sx={{ mt: 10 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="my-5"> Please give us your valuable review </h2>
        <input
          value={user.displayName}
          {...register("name", { required: true })}
          placeholder="Your Name"
        />
        <input
          type="number"
          {...register("rating")}
          placeholder="Rating Must Between 1-5"
        />
        <textarea
          className="textarea-field"
          {...register("comment", { required: true })}
          placeholder="Write Your Comment"
        />
        <input
          type="submit"
          className="btn btn-warning review-btn"
          value="Review Submit"
        />
      </form>
    </div>
  );
};

export default Review;
