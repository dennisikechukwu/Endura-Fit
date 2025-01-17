import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from './HeroBanner'
import SearchExercises from './SearchExercises'
import Exercises from './Exercises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box sx={{
      mx: "auto",
      justifyContent: "center"
    }}>
      <HeroBanner/>
      <SearchExercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises
       setExercises={setExercises}
       bodyPart={bodyPart}
       exercises= {exercises}
      />
    </Box>
  )
}

export default Home