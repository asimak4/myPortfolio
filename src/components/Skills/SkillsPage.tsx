import React from 'react';
import { Grid, Typography, Chip, Paper, Box, Container, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import { skillsList, hobbiesList } from './SkillsandHobbies';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FloatingDecorations from '../shared/FloatingDecorations';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

// Map category names to icons
const categoryIcons: { [key: string]: React.ReactNode } = {
  'Frontend': <WebIcon />,
  'Backend': <StorageIcon />,
  'Languages': <CodeIcon />,
  'Tools': <BuildIcon />,
  'Cloud': <CloudIcon />,
  'Design': <BrushIcon />,
};

const SkillsPage = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      <FloatingDecorations variant="quaternary" />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'left', width: '100%', mb: 8, animation: `${fadeIn} 1s ease-out` }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'secondary.main',
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            EXPERTISE
          </Typography>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              mb: 3,
            }}
          >
            Skills & Technologies
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              mb: 4,
            }}
          >
            A comprehensive overview of my technical skills and areas of expertise.
          </Typography>
        </Box>

        {/* Technical Skills */}
        <Grid container spacing={3}>
          {Object.entries(skillsList).map(([category, items], index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={category}
              sx={{
                animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    {categoryIcons[category] || <CodeIcon />}
                  </IconButton>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {category}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {items.map((item, i) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        animation: `${scaleIn} 0.5s ease-out ${index * 0.2 + i * 0.1}s backwards`,
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.2)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Hobbies Section */}
        <Box 
          sx={{ 
            mt: 8,
            animation: `${fadeIn} 1s ease-out 0.6s backwards`,
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              color: 'white',
              fontWeight: 600,
              mb: 3,
            }}
          >
            <IconButton
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                mr: 2,
                '&:hover': { bgcolor: 'secondary.dark' },
              }}
            >
              <SportsEsportsIcon />
            </IconButton>
            Hobbies & Interests
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {hobbiesList.map((hobby, index) => (
                <Chip
                  key={hobby}
                  label={hobby}
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    animation: `${scaleIn} 0.5s ease-out ${0.8 + index * 0.1}s backwards`,
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsPage;
