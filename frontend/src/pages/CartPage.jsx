import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, handleRemoveCart } = useCartContext();
  const navigate = useNavigate(); 

  const handleCheckoutCart = () => {
    navigate("/checkoutPage");
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  alt={item.name}
                  src={item.image_link || "path_to_default_image.jpg"}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography color="textSecondary">
                    Brand: {item.brand}
                  </Typography>
                  <Typography>
                    Price: {item.price} {item.currency}
                  </Typography>
                  <Button
                    onClick={() => handleRemoveCart(item.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Remove From Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Button
        onClick={handleCheckoutCart}
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartPage;
