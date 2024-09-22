import React from 'react';
import { Stack } from '@mui/material';
import icon from '../assets/gym.jpg'; // Example image

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const isSelected = bodyPart === item;

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: isSelected ? '4px solid #2171e3' : '',
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
        boxShadow: isSelected ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
      }}
      onClick={() => setBodyPart(item)}
    >
      <img
        src={icon} // Use a dynamic image here if needed, based on the item
        alt={item}
        style={{
          width: '150px',
          height: '150px',
        }}
      />
      <span style={{
        fontWeight: "700",
        fontSize: "25px"
      }}>{item}</span> {/* Display the body part name */}
    </Stack>
  );
};

export default BodyPart;
