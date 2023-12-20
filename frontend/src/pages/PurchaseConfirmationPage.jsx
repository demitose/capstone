import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const PurchaseConfirmationPage = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: '40px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Purchase Successful!
        </Typography>
        <Typography variant="body1">
          Your items have been purchased. Thank you for shopping with us!
        </Typography>
      </Paper>
    </Container>
  );
};

export default PurchaseConfirmationPage;
