import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { product1 } from "../SmallComponents/image";
import Products from "../Products/Products";
const ProductsSection = () => {
  
  return (
    <Box sx={{ backgroundColor: '#121120', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12}>
            <Box py={3}>
              <Typography
                variant="h5"
                sx={{ textAlign: 'center', color: 'white' }}
              >
                All Products
              </Typography>
            </Box>
          </Grid>
          {[1, 2, 3, 4, 5, 6 ,7 , 8 ,9 ,10].map((item, index) => (
            <Grid
              key={index}
              mt={10}
              item
              xs={12}
              md={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box mr={2}>
                <Products
                  img={product1} // Use your actual product image
                  text="Sample"
                  detail="uhfhofhjsehhshlkstkhl jiasjkjlr ijpafjifs"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsSection;
