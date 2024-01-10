import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Grid,
} from '@mui/material';

const placeholderImage =
  'https://i.pinimg.com/736x/5c/c6/99/5cc6999d3d2a6879702d6455e6c66f73.jpg';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://makeup-api.herokuapp.com/api/v1/products.json'
        );

        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ color: 'white' }}>Makeup Search Page</h1>
      <TextField
        label="Search by name"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        InputProps={{
          style: { color: 'white' },
        }}
      />
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image_link || placeholderImage}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="subtitle1">{product.brand}</Typography>
                {/* Add more details as needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchPage;
