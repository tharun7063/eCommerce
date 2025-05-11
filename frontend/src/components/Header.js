// src/components/Header.js
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const location = useLocation();
    const [anchorProducts, setAnchorProducts] = useState(null);
    const [anchorBlogs, setAnchorBlogs] = useState(null);

    const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
    const handleMenuClose = (setter) => () => setter(null);

    const isActive = (path) => location.pathname === path;

    return (
        <AppBar position="fixed" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    <span style={{ color: '#4F46E5' }}>Ecommerce</span>Web
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Button
                        color={isActive('/') ? 'primary' : 'inherit'}
                        component={Link}
                        to="/"
                    >
                        Home
                    </Button>

                    <Button
                        color={isActive('/about') ? 'primary' : 'inherit'}
                        component={Link}
                        to="/about"
                    >
                        About
                    </Button>

                    <Button
                        color="inherit"
                        endIcon={<ExpandMoreIcon />}
                        onClick={handleMenuOpen(setAnchorProducts)}
                    >
                        Products
                    </Button>
                    <Menu
                        anchorEl={anchorProducts}
                        open={Boolean(anchorProducts)}
                        onClose={handleMenuClose(setAnchorProducts)}
                    >
                        <MenuItem onClick={handleMenuClose(setAnchorProducts)}>All Products</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorProducts)}>Categories</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorProducts)}>New Arrivals</MenuItem>
                    </Menu>

                    <Button
                        color="inherit"
                        endIcon={<ExpandMoreIcon />}
                        onClick={handleMenuOpen(setAnchorBlogs)}
                    >
                        Blogs
                    </Button>
                    <Menu
                        anchorEl={anchorBlogs}
                        open={Boolean(anchorBlogs)}
                        onClose={handleMenuClose(setAnchorBlogs)}
                    >
                        <MenuItem onClick={handleMenuClose(setAnchorBlogs)}>Latest Posts</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorBlogs)}>Guides</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorBlogs)}>News</MenuItem>
                    </Menu>

                    <Button
                        color={isActive('/contact') ? 'primary' : 'inherit'}
                        component={Link}
                        to="/contact"
                    >
                        Contact
                    </Button>

                    <IconButton color="inherit">
                        <SearchIcon />
                    </IconButton>

                    <Button startIcon={<PersonIcon />} color="primary">Login</Button>
                    <Button startIcon={<ShoppingBagIcon />} color="primary">Cart</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
