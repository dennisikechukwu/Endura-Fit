import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../datas/fetchData';

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  // Calculate the current exercises to display
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
    window.scrollTo({
      top: document.getElementById('exercises').offsetTop, // Scroll to top of exercise section
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: '120px',
        },
      }}
      mt="40px"
      p="25px"
    >
      <Typography
        variant="h3"
        mb="40px"
        fontWeight="700"
        textTransform="capitalize"
        sx={{
          fontWeight : {
            sm: "400",
            xs: "300"
          }
        }}
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: {
            lg: '110px',
            xs: '40px',
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="80px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
