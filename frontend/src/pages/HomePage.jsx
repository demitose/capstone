import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const backgroundImageUrl = 'https://en.pimg.jp/063/390/172/1/63390172.jpg';

export default function Homepage() {
  return (
    <Container
      maxWidth="md"
      style={{
        marginTop: '40px',
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={0} 
        style={{
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        }}
      >
        <Typography variant="h3" gutterBottom style={{ color: '#000' }}>
          Welcome to our Makeup Store Front!!
        </Typography>
        <Typography variant="body1" style={{ color: '#000' }}>
          Explore our collection of high-quality makeup products from top brands.
        </Typography>
        {}
      </Paper>
    </Container>
  );
}