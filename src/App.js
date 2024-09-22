import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import { Box } from '@mui/material'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ExerciseDetail from './components/ExerciseDetail'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box width="100%" sx={{ maxWidth: "1280px", mx: "auto" }}> {/* Set width to 100% with a maxWidth */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
