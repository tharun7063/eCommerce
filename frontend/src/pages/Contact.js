import React from 'react';
import { Box, Typography } from '@mui/material';

const Contact = () => {
    return (
        <Box sx={{ mt: 12, px: 2 }}>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Typography variant="body1">
                You can reach us at support@ecommerceweb.com or call 123-456-7890.
            </Typography>
        </Box>
    );
};

export default Contact;
