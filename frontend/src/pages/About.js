import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ mt: 12, px: 2 }}>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1">
                EcommerceWeb is committed to delivering high-quality products with excellent customer service.
            </Typography>
        </Box>
    );
};

export default About;
