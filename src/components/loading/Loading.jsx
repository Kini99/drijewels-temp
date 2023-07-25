import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import HeadingBox from '../heading-box/components/HeadingBox';

const Loading = () => {

    const arr=[
        {
            title:"Your dreams, our creations!",
            text:"Unleash your imagination and let us bring your dream jewellry to life!!"
        },
        {
            title:"Have an Idea?",
            text:"Perfect! We'll turn your vision into a stunning reality."
        },
        {
            title:"Want something unique?",
            text:"Explore our collection of one-of-a-kind jewellry pieces."
        },
        {
            title:"Get something personalized!",
            text:"We'll create a special piece of jewelry tailored to your style."
        },{
            title:"Searching for the Perfect Surprise?",
            text:"Let us help you make the moment unforgettable with our exquisite collection of jewellry. Discover the perfect piece that will leave them speechless and create cherished memories that will last a lifetime."
        }
    ]

    const random = arr[Math.floor(Math.random() * arr.length)];
    
    return (
    <Box sx={{padding:"5%"}}>
        <HeadingBox title={random.title} />
        <Typography>{random.text}</Typography>
        <CircularProgress disableShrink sx={{margin:"5%"}} />
    </Box>
)
}

export default Loading