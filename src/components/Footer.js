import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{
      bgcolor: "#f0f0f0",
      mt: {
        lg: "40px",
        xs: "20px"
      }
    }} alignItems="center" p="30px">
     <Typography textAlign="center" sx={{
      fontSize: {
        lg: "30px",
        xs: "20px"
      },
      fontFamily: "sans-serif"
     }} fontWeight={700} color="#2171e3">
      Made by Dennis and with some love
     </Typography>
    </Box>
  )
}

export default Footer