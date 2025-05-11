import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button, Container } from '@mui/material';

const HeroSlider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageList = [
            '/assets/images/image1.jpg',
            '/assets/images/image2.jpg',
            '/assets/images/image3.jpg',
            '/assets/images/image4.jpg',
            '/assets/images/image5.jpg',
        ];
        setImages(imageList);
    }, []);

    const commonText = {
        title: 'Up To 60% Off Now',
        headline: 'Mid Season Sale 40%',
        subtitle: 'Final Clearance: Take 20% off ‘Sale Must-Haves’',
    };

    return (
        <Carousel fade interval={1400}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <div
                        style={{
                            position: 'relative',
                            height: '400px',
                            backgroundImage: `
                                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
                                linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
                                url(${image})
                            `,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                        }}
                    >
                        <Container
                            maxWidth="sm"
                            style={{
                                textAlign: 'center',
                                padding: '20px',
                            }}
                        >
                            <h5>{commonText.title}</h5>
                            <h1 style={{ fontWeight: 'bold' }}>{commonText.headline}</h1>
                            <p>{commonText.subtitle}</p>
                            <Button
                                variant="contained"
                                sx={{ mt: 2, backgroundColor: '#9333EA', color: 'black' }}
                            >
                                Start Shopping <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </Button>
                        </Container>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HeroSlider;
