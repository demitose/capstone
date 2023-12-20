import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Snackbar } from '@mui/material';
import { useCartContext } from '../context/CartContext';

const Nyx = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, handleAddToCart, handleRemoveCart } = useCartContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCartWithSnackbar = (product) => {
    handleAddToCart(product);
    setSnackbarOpen(true);
  };

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="revlon-card"> {}
            <CardMedia
              component="img"
              height="140"
              alt={product.name}
              src={product.image_link || 'path_to_default_image.jpg'}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {product.name}
              </Typography>
              <Typography color="textSecondary">
                Brand: {product.brand}
              </Typography>
              <Typography>
                Price: {product.price} {product.currency}
              </Typography>
              <Button onClick={() => handleAddToCartWithSnackbar(product)} variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} 
        onClose={handleSnackbarClose}
        message="Added to Cart"
      />
    </Grid>
  );
};

export default Nyx;
