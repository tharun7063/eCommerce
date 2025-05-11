import React from 'react';
import { Box, Grid, Typography, Link, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => (
    <Box bgcolor="black" color="white" py={6} px={4}>
        <Grid container spacing={4}>
            <Grid item xs={12} lg={3}>
                <Typography variant="h6">Useful Links</Typography>
                <Stack spacing={1}>
                    <Link href="#" color="inherit">Home</Link>
                    <Link href="#" color="inherit">About</Link>
                    <Link href="#" color="inherit">Blogs</Link>
                </Stack>
            </Grid>

            <Grid item xs={12} lg={3}>
                <Typography variant="h6">Information</Typography>
                <Stack spacing={1}>
                    <Link href="#" color="inherit">Terms & Conditions</Link>
                    <Link href="#" color="inherit">Delivery Terms</Link>
                </Stack>
            </Grid>

            <Grid item xs={12} lg={3}>
                <Typography variant="h6">Address</Typography>
                <Typography>998 13th Street, Office 436</Typography>
                <Typography>Harlo 61466</Typography>
                <Typography>+(21) 255 999 8888</Typography>
            </Grid>

            <Grid item xs={12} lg={3}>
                <Typography variant="h6">Follow Us</Typography>
                <Stack direction="row" spacing={2}>
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <LinkedIn />
                </Stack>
            </Grid>
        </Grid>
    </Box>
);

export default Footer;
