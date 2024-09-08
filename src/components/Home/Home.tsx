import React from 'react';
import { Box, Typography } from '@mui/material';
import homeScreenIcon from '../../assets/homePageIcon1.png';

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: {
          xs: "column", // Stacks items vertically on small screens
          md: "row"    // Stacks items horizontally on medium and larger screens
        },
        alignItems: "center",
        justifyContent: "space-evenly", // Center items horizontally
        backgroundColor: "#24272B",
        textAlign: {
          xs: "center", // Centers text on small screens
          md: "left"    // Aligns text to the left on medium and larger screens
        },
        padding: "0 20px",
        gap: 2, // Adds spacing between the text and image
      }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          color: '#04b4e7',
        }}
      >
        <Typography variant='h2' gutterBottom sx={{ fontWeight: 'bold' }}>
          Alexander Simak
        </Typography>
        <Typography variant='h4'>
          Full Stack Developer
        </Typography>
        <Typography
          variant='h6'
          sx={{
            background: "linear-gradient(90deg, #04b4e7, #00f882)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          The world has a lot of problems, I want to be the one finding the solutions.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: {
            xs: '100%',   // Full width on small screens
            md: 'auto'    // Auto width on medium and larger screens
          },
          maxWidth: '400px',
        }}
      >
        <img src={homeScreenIcon} alt='devIcon' style={{ width: '100%', height: 'auto' }} />
      </Box>
    </Box>
  );
};

export default Home;
