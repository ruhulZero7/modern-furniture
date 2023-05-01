import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './AddProduct.css';

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post('https://modern-furniture-server.onrender.com/products', data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product Added Successfully',
            showConfirmButton: true,
          });

          reset();
        }
      });
  };
  return (
    <Container className="add-product-container">
      <div className="add-product-form pb-5">
        <h2 className="text-warning pt-4">Add a new product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', { required: true, maxLength: 50 })}
            placeholder="Product Name"
          />
          <input
            {...register('brand', { required: true, maxLength: 20 })}
            placeholder="Brand Name"
          />
          <textarea
            className="description-field"
            {...register('detail', { required: true })}
            placeholder="Description"
          />
          <input type="number" {...register('price')} placeholder="Price" />
          <input type="number" {...register('star')} placeholder="Rating" />

          <input {...register('img')} placeholder="Image URL" />
          <input
            className="btn btn-warning"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    </Container>
  );
};

export default AddProduct;
