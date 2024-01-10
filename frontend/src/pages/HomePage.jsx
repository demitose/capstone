import React, { useEffect, useState } from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const HomePage = () => {
  const [revlonProducts, setRevlonProducts] = useState([]);
  const [nyxProducts, setNyxProducts] = useState([]);
  const [essieProducts, setEssieProducts] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    const fetchData = async (brand, setProducts) => {
      try {
        const response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`);
        const data = await response.json();
        setProducts(data.slice(0, 3)); // Limit to the first 3 products
      } catch (error) {
        console.error(`Error fetching ${brand} products:`, error);
      }
    };

    fetchData('revlon', setRevlonProducts);
    fetchData('nyx', setNyxProducts);
    fetchData('essie', setEssieProducts);
  }, []);

  const handleReadMoreClick = (brand, index) => {
    setExpandedDescriptions((prevExpanded) => ({
      ...prevExpanded,
      [`${brand}-${index}`]: !prevExpanded[`${brand}-${index}`],
    }));
  };

  const renderProductCards = (products, brand) => (
    <>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image_link || 'https://example.com/default-image.jpg'}
                alt={product.name}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {expandedDescriptions[`${brand}-${index}`]
                    ? product.description
                    : `${product.description?.slice(0, 100)}...`}
                </Typography>
              </CardContent>
              {product.description && (
                <Container sx={{ textAlign: 'center', marginTop: 'auto' }}>
                  <Button
                    onClick={() => handleReadMoreClick(brand, index)}
                    color="primary"
                    size="small"
                  >
                    {expandedDescriptions[`${brand}-${index}`] ? 'Read Less' : 'Read More'}
                  </Button>
                </Container>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary">
          Explore More {brand} Products
        </Button>
      </Container>
    </>
  );

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: '40px',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#FFC0CB',
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Our Makeup Store
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        Discover our premium collection of high-quality makeup products from top brands.
      </Typography>

      {/* Revlon Products */}
      <Typography variant="h4" align="center" gutterBottom>
        Revlon
      </Typography>
      {renderProductCards(revlonProducts, 'Revlon')}

      {/* NYX Products */}
      <Typography variant="h4" align="center" gutterBottom>
        NYX
      </Typography>
      {renderProductCards(nyxProducts, 'NYX')}

      {/* Essie Products */}
      <Typography variant="h4" align="center" gutterBottom>
        Essie
      </Typography>
      {renderProductCards(essieProducts, 'Essie')}
    </Container>
  );
};

export default HomePage;
