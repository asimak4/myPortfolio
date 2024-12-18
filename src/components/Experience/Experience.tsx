import React from 'react';
import { Box, Typography, Container, Paper, Chip, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { experiences } from './workExperience';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2D3436 100%)',
        py: { xs: 8, md: 12 },
        position: 'relative',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 184, 148, 0.1) 0%, rgba(85, 239, 196, 0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
        }
      }}
    >
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
            CAREER PATH
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
            Work Experience
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              mb: 4,
            }}
          >
            My professional journey and the valuable experiences I've gained along the way.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: 'rgba(255,255,255,0.1)',
              zIndex: 0,
            }}
          />

          {/* Experience items */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {experiences.map((experience, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  mb: 6,
                  animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '16px', md: '50%' },
                    transform: { xs: 'none', md: 'translateX(-50%)' },
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    border: '2px solid',
                    borderColor: 'secondary.light',
                    zIndex: 2,
                  }}
                />

                {/* Content card */}
                <Paper
                  sx={{
                    flex: 1,
                    ml: { xs: 5, md: index % 2 === 0 ? 0 : 4 },
                    mr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease-in-out',
                    animation: `${slideIn} 1s ease-out ${index * 0.2}s backwards`,
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                    <IconButton
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'secondary.dark' },
                      }}
                    >
                      <BusinessIcon />
                    </IconButton>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                        {experience.role}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'secondary.main', mb: 2 }}>
                        {experience.company}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                    <Chip
                      icon={<DateRangeIcon />}
                      label={experience.duration}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                      }}
                    />
                    <Chip
                      icon={<LocationOnIcon />}
                      label={experience.location}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                      }}
                    />
                  </Box>

                  <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {experience.bullets.map((bullet, i) => (
                      <Typography
                        key={i}
                        component="li"
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          mb: 1,
                          '&::marker': {
                            color: 'secondary.main',
                          },
                        }}
                      >
                        {bullet}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
