import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ManageProducts = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch(`https://modern-furniture-server.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, [products]);

  // delete order
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://modern-furniture-server.vercel.app/products/${id}`;
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              );
            }
          });
      }
    });
  };

  return (
    <Container>
      <h1>Total products: {products.length}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <TableContainer component={Paper} className="table-container">
              <Table sx={{ minWidth: 700 }} aria-label="My products table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Photo</StyledTableCell>
                    <StyledTableCell align="left">Product Name</StyledTableCell>
                    <StyledTableCell align="left">Brand</StyledTableCell>
                    <StyledTableCell align="left">Price</StyledTableCell>

                    <StyledTableCell align="center">Rating</StyledTableCell>

                    <StyledTableCell align="center">
                      Delete Product
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell
                        style={{ width: '100px' }}
                        component="th"
                        scope="row"
                      >
                        <img className="img-fluid" src={row.img} alt="" />
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.brand}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.price}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        {row.star}
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <button
                          className="btn btn-danger"
                          variant="contained"
                          onClick={() => handleDeleteProduct(row._id)}
                        >
                          Delete Product <DeleteOutlineOutlinedIcon />
                        </button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ManageProducts;
