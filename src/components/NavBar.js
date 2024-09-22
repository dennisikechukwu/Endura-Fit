import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from "../assets/logo.jpg"

const NavBar = () => {
  return (
    <Stack direction="row" justifyContent="start" sx={{
      gap : {
        xs: "20px",
        sm: "122px",


      },

      mt: {
        xs: "20px",
        sm: "34px"

      },
      px: "15px"
    }}>
      <Link to="/">
          <img
          src={Logo}
          alt='logo'
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px"
          }}
          />
      </Link>
      <Stack 
      direction="row"
      gap="38px"
      fontSize="24px"
      alignItems="flex-end"
      >
        <Link to="/" style={{
          textDecoration: "none",
          color: "#3a1212",
          borderBottom: "3px solid #2171e3"
        }}>
        Home
        </Link>
        <a href='#exercises' style={{
          textDecoration: "none", color: "#3a1212"
        }}>
            Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default NavBar