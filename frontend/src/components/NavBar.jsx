import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BrushIcon from '@mui/icons-material/Brush';
import { NavLink, useNavigate } from 'react-router-dom';
import { pages } from '../data/pages';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCart = () => {
    navigate("/cartPage");
  };

  const handleSearch = () => {
    navigate("/searchPage");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BrushIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Makeup Store
          </Typography>

          {/* Mobile menu items in a flexbox */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={handleSearch}
            >
              
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
       
            </IconButton>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Makeup Store
          </Typography>

          {/* Navigation Buttons */}
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem key={page.link} component={NavLink} to={page.link}>
                {page.label}
              </MenuItem>
            ))}
          </Box>

          {/* Search Button */}
          <IconButton
            size="large"
            aria-label="search"
            color="inherit"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>

          {/* Cart Button */}
          <Box sx={{ flexGrow: 1, justifySelf: 'flex-end', textAlign: 'right' }}>
            <IconButton
              size="large"
              aria-label="cart"
              color="inherit"
              onClick={handleOpenCart}
            >
              <LocalMallIcon />
            </IconButton>
          </Box>

          {/* Mobile Menu (Popover) */}
          <Popover
            open={Boolean(anchorElNav)}
            anchorEl={anchorElNav}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.link} component={NavLink} to={page.link} onClick={handleCloseNavMenu}>
                {page.label}
              </MenuItem>
            ))}
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
