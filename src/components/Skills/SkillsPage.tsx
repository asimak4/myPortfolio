import React from 'react';
import { Grid, Typography, Chip, Paper, Box, Tooltip } from '@mui/material';
import { skillsList, hobbiesList } from './SkillsandHobbies';

const SkillsPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "column",
        },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#24272B",
        textAlign: {
          xs: "center",
          md: "left",
        },
        padding: "0 20px",
        gap: 4, // Increased gap between sections
      }}
      id='skills'>
      <Box sx={{ maxWidth: '75vw', py: 15 }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
          Technical Skills
        </Typography>
        <Grid container spacing={3}>
          {Object.entries(skillsList).map(([category, items]) => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundColor: '#30343b',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                  borderRadius: 2,
                }}
              >
                <Typography
                  sx={{
                    color: '#b2b2b2',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                  variant="h6"
                >
                  {category}
                </Typography>
                {items.map(item => (
                  <Tooltip title={`${item}`} key={item}>
                    <Chip
                      label={item}
                      sx={{
                        margin: 1,
                        color: '#b2b2b2',
                        backgroundColor: '#42474d',
                        '&:hover': {
                          backgroundColor: '#565c66',
                        },
                      }}
                    />
                  </Tooltip>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Hobbies Section */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
            Hobbies
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
            }}
          >
            {hobbiesList.map(hobby => (
              <Tooltip title={`${hobby}`} key={hobby}>
                <Chip
                  label={hobby}
                  sx={{
                    margin: 0.5,
                    color: '#b2b2b2',
                    backgroundColor: '#565c66',
                    '&:hover': {
                      backgroundColor: '#6b6f76',
                    },
                  }}
                />
              </Tooltip>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsPage;
