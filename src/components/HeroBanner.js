import React from 'react'
import { Box } from '@mui/material'
import {Button} from '@mui/material'
import {Typography} from '@mui/material'
import HeroBannerImage from "../assets/hero.jpg"

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: "150px", xs: "65px"},
        ml: {sm: "50px"},
        padding: {xs: "5px", sm: "10px"}

    }}>
        <Box sx={{
            flexDirection: "column",
            justifyContent: {
                md: "center",
                lg: "none"
            }
        }}>
        <Typography color="#2171e3" fontWeight="600" fontSize="30px" mb={3}>
            Endura Fit
        </Typography>
        <Typography fontWeight="700" sx={{
            fontSize : {
                xs: "40px",
                lg: "45px"
            }
        }}>
                Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="34px" mb={3}>
            Check out the most effective exercises
        </Typography>
        <Button variant="contained"  href= "#exercises" sx={{
            p: "12px",
            mb: "30px",
            backgroundColor: "2171e3",
            color: "white"

        }}>
            Explore Exercises
        </Button>
        </Box>
        
        <Box sx={{
            display: { xs: "none", sm: "none", md:"block"},
            mb:" 20px"

        }}>
        <img
        src={HeroBannerImage}
        alt='banner'
        className='hero-banner-img'
        />

        </Box>
        
    </Box>
  )
}

export default HeroBanner