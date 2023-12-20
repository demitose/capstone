import React, { useState } from 'react';
import { Container, Typography, TextField, MenuItem, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    state: '',
  });

  const navigate = useNavigate();
  const handlePurchase = () => {
    navigate("/purchaseConfirmationPage");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Purchase:', formData);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <MenuItem value="SA">South Australia</MenuItem>
              <MenuItem value="NSW">New South Wales</MenuItem>
              <MenuItem value="VIC">Victoria</MenuItem>
              <MenuItem value="QLD">Queensland</MenuItem>
              <MenuItem value="WA">Western Australia</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handlePurchase}
              type="submit"
              variant="contained"
              color="primary"
            >
              Purchase
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CheckoutPage;