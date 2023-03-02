import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import './Review.css';

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post('https://modern-furniture-server.vercel.app/reviews', data)
      .then((res) => {
        if (res.data.insertedId) {
          // order successfull modal
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thanks for review us',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };

  return (
    <div className="review-form pb-5" sx={{ mt: 10 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="my-5"> Please give us your valuable review </h2>
        <input
          value={user.displayName}
          {...register('name', { required: true })}
          placeholder="Your Name"
        />
        <input
          type="number"
          {...register('rating')}
          placeholder="Rating Must Between 1-5"
        />
        <textarea
          className="textarea-field"
          {...register('comment', { required: true })}
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
