import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import Products from "../Products/Products";
import { product2 } from "../SmallComponents/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { url } from "../../utils";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [orderitem, setOrderItem] = useState([]);

  const [shippingAddress, setShippingAddress] = useState("");
  const [Quantity, setQuantity] = useState(1);

  useEffect(() => {
    const id = localStorage.getItem("cart");
    axios
      .get(`${url}/product/${id}`)
      .then((response) => {
        // setProducts(response.data);
        console.log(response.data);
        setCartItems(response.data);
        // console.log(product.images[0]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const [userid, setUserId] = useState();
  const [productid, setProductId] = useState();
  const handleOrder = () => {
    console.log("order clicked");
    setUserId(localStorage.getItem("userId"));
    setProductId(localStorage.getItem("cart"));
    
  };
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
                    <TableCell sx={{ color: "white" }}>Image</TableCell>
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
                  {cartItems?.map(({ name, description, price, images }) => (
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
                        <img
                          src={`${url}/${images[0]}`}
                          alt=""
                          width={100}
                          hight={100}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ color: "white" }}
                      >
                        {name}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {description}
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        <TextField
                          type="number"
                          value={Quantity}
                          variant="outlined"
                          size="small"
                          onChange={(e) => setQuantity(e.target.value)}
                          sx={{ color: "white", backgroundColor: "white" }}
                        />
                      </TableCell>
                      <TableCell align="right" sx={{ color: "white" }}>
                        {price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            {/* Shipping Address Input */}
            <TextField
              label="Shipping Address"
              variant="filled"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              sx={{ backgroundColor: "white", width: "100%" }}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginBottom: "10px" }}
              onClick={handleOrder}
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