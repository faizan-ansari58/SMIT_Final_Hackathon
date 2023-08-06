import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Products = (props) => {
  return (
    <Box
      height={300}
      width={150}
      sx={{
        border: '2px solid #795548',
        borderRadius: '8px',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
        }}
      >
        <img src={props.img} height={100} width={100} alt="product1" />
      </Box>
      <Box mt={3}>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'red',
            fontFamily: 'Oswald',
            fontSize: '1.25rem',
          }}
          variant="h6"
        >
          {props.text}
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'black',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
          }}
          variant="body2"
        >
          {props.detail}
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              width: '100%',
              marginBottom: '8px',
              backgroundColor: '#f39c12',
              '&:hover': { backgroundColor: '#e67e22' },
            }}
          >
            Show
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{
              width: '100%',
              backgroundColor: '#e74c3c',
              '&:hover': { backgroundColor: '#c0392b' },
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
