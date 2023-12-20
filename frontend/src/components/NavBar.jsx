import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import BrushIcon from '@mui/icons-material/Brush';
import { NavLink, useNavigate } from 'react-router-dom';
import { pages } from '../data/pages';
import LocalMallIcon from '@mui/icons-material/LocalMall';


function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenCart = () => {
    navigate("/cartPage")
  }

  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {}
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

          {/* mobile menu items in a flexbox */}
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
            <Menu id="menu-appbar" anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.link} component={NavLink} to={page.link}>{page.label}</MenuItem>
              ))}
            </Menu>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                
                color="inherit"
              >
                <LocalMallIcon />
              </IconButton>
          </Box>

          <BrushIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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

          {}
          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            {}
            {pages.map((page) => (
                <MenuItem key={page.link} component={NavLink} to={page.link}>{page.label}</MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, justifySelf: 'flex-end', textAlign: 'right' }}>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenCart} 
                color="inherit"
              >
                <LocalMallIcon />
              </IconButton>     
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar