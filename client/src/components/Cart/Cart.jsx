import React from "react";
import { Grid, Box, Container, Typography, Button } from "@mui/material";
import Products from "../Products/Products";
import { product2 } from "../SmallComponents/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const cartItems = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
];

const Cart = () => {
  const rows = [
    {
      name: "Product1",
      details: "kmfdmkf",
      quantity: "1",
      price: 60,
    },
    {
      name: "Product4",
      details: "kmfdmkf",
      quantity: "3",
      price: 80,
    },
  ];
  return (
    <Box sx={{ backgroundColor: "#121120" }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "center", color: "white" }}
              variant="h4"
            >
              Shopping Cart
            </Typography>
          </Grid>
          <Grid
            item
            container
            mt={5}
            sx={{
              display: "flex",

              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Title</TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Details
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Quantity
                    </TableCell>
                    <TableCell align="right" sx={{ color: "white" }}>
                      Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map(({ name, details, price, quantity }) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        {name}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {details}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {price}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: "10px" }}
            >
              OrderNow
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
