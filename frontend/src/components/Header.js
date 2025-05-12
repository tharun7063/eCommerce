import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    InputBase
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
    const location = useLocation();
    const [anchorProducts, setAnchorProducts] = useState(null);
    const [anchorBlogs, setAnchorBlogs] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [userLocation, setUserLocation] = useState('Fetching location...');

    const handleMenuOpen = (setter) => (event) => setter(event.currentTarget);
    const handleMenuClose = (setter) => () => setter(null);
    const isActive = (path) => location.pathname === path;

    const handleSearchToggle = () => setSearchOpen(prev => !prev);
    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                    const data = await response.json();
                    const state = data.address.state;
                    const country = data.address.country;
                    // Add the Indian flag image before the location details
                    setUserLocation(
                        <span>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png"
                                alt="Indian Flag"
                                style={{ width: 20, height: 15, marginRight: 5 }}
                            />
                            {state}, {country}
                        </span>
                    );
                } catch (error) {
                    setUserLocation('Location unavailable');
                }
            },
            () => {
                setUserLocation('Permission denied');
            }
        );
    }, []);


    return (
        <AppBar position="fixed" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box component="span" sx={{ color: 'primary.main' }}>Ecommerce</Box>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                        {userLocation} {/* Show Flag + State, Country */}
                    </Typography>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Button color={isActive('/') ? 'primary' : 'inherit'} component={Link} to="/">Home</Button>
                    <Button color={isActive('/about') ? 'primary' : 'inherit'} component={Link} to="/about">About</Button>

                    <Button color="inherit" endIcon={<ExpandMoreIcon />} onClick={handleMenuOpen(setAnchorProducts)}>
                        Products
                    </Button>
                    <Menu anchorEl={anchorProducts} open={Boolean(anchorProducts)} onClose={handleMenuClose(setAnchorProducts)}>
                        <MenuItem onClick={handleMenuClose(setAnchorProducts)}>All Products</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorProducts)}>Categories</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorProducts)}>New Arrivals</MenuItem>
                    </Menu>

                    <Button color="inherit" endIcon={<ExpandMoreIcon />} onClick={handleMenuOpen(setAnchorBlogs)}>
                        Blogs
                    </Button>
                    <Menu anchorEl={anchorBlogs} open={Boolean(anchorBlogs)} onClose={handleMenuClose(setAnchorBlogs)}>
                        <MenuItem onClick={handleMenuClose(setAnchorBlogs)}>Latest Posts</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorBlogs)}>Guides</MenuItem>
                        <MenuItem onClick={handleMenuClose(setAnchorBlogs)}>News</MenuItem>
                    </Menu>

                    <Button color={isActive('/contact') ? 'primary' : 'inherit'} component={Link} to="/contact">Contact</Button>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {searchOpen ? (
                            <InputBase
                                autoFocus
                                placeholder="Search…"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onBlur={() => setSearchOpen(false)}
                                sx={{
                                    border: '1px solid #ccc',
                                    borderRadius: 1,
                                    px: 1,
                                    height: 36,
                                    width: 160,
                                    fontSize: '0.9rem',
                                    backgroundColor: 'background.paper',
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        console.log('Search for:', searchQuery);
                                    }
                                }}
                            />
                        ) : (
                            <IconButton color="inherit" onClick={handleSearchToggle}>
                                <SearchIcon />
                            </IconButton>
                        )}
                    </Box>

                    <Button startIcon={<PersonIcon />} color="primary">Login</Button>
                    <Button startIcon={<ShoppingBagIcon />} color="primary">Cart</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
