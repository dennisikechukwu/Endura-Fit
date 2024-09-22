import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, bodyParts }) => {
  return (
    <div style={{ display: 'flex', overflowX: 'scroll' }}>
      {data.map((item, index) => (
        <Box
          key={index}
          itemId={item}
          title={item}
          m="0 40px"
          sx={{ cursor: 'pointer' }}
        >
         {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
