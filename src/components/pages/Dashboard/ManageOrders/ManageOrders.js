import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Swal from "sweetalert2";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://murmuring-ravine-72524.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  // delete order
  const handleDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://murmuring-ravine-72524.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
          });
      }
    });
  };

  // update order
  const handleUpdateStatus = (id) => {
    axios
      .put(`https://murmuring-ravine-72524.herokuapp.com/orders/${id}`, {
        status: "Approved",
      })
      .then((res) => {
        console.log(res);
        if (res.data.matchedCount > 0) {
          Swal.fire("Approved!", "Order has been Approved.", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h1>Total orders: {orders.length}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <TableContainer component={Paper} className="table-container">
              <Table sx={{ minWidth: 700 }} aria-label="My orders table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Car Brand</StyledTableCell>
                    <StyledTableCell align="center">Car Model</StyledTableCell>
                    <StyledTableCell align="center">
                      Order Status
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Cancel/Delete
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.brandName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.model}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button
                          variant="contained"
                          onClick={() => handleUpdateStatus(row._id)}
                        >
                          {row.status}
                        </Button>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteOrder(row._id)}
                        >
                          Cancel Order <CancelOutlinedIcon />
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

export default ManageOrders;
