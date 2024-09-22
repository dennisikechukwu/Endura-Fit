import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExercisesVideos = ({ exerciseVideos, name }) => {
  return (
    <Box
      sx={{
        marginTop: { lg: '150px', xs: '25px' },
      }}
      p="20px"
    >
      <Typography  mb="32px" fontWeight={600} sx={{
        fontSize: {
          xs: "30px",
          lg: "40px"
        }
      }}>
        Watch <span style={{ color: '#2171e3', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }}>
        {exerciseVideos?.slice(0, 4).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderRadius: '10px' }} />
            <Typography variant="h6" color="textPrimary" mt="5px" textAlign="center" fontWeight={700}>
              {item.video.title}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExercisesVideos;
