import React from 'react';
import { Box, Typography, Container, Paper, Chip, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ComputerIcon from '@mui/icons-material/Computer';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { experiences } from './workExperience';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Tech Elements */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        {/* Left side decorations */}
        <Box
          sx={{
            position: 'absolute',
            left: '5%',
            top: '20%',
            color: 'rgba(9,132,227,0.2)',
            animation: `${float} 6s ease-in-out infinite`,
          }}
        >
          <ComputerIcon sx={{ fontSize: '4rem' }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '10%',
            top: '50%',
            color: 'rgba(9,132,227,0.15)',
            animation: `${float} 8s ease-in-out infinite`,
            animationDelay: '1s',
          }}
        >
          <KeyboardIcon sx={{ fontSize: '3rem' }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '7%',
            bottom: '20%',
            color: 'rgba(9,132,227,0.1)',
            animation: `${float} 7s ease-in-out infinite`,
            animationDelay: '2s',
          }}
        >
          <CodeIcon sx={{ fontSize: '3.5rem' }} />
        </Box>

        {/* Right side decorations */}
        <Box
          sx={{
            position: 'absolute',
            right: '8%',
            top: '30%',
            color: 'rgba(9,132,227,0.15)',
            animation: `${float} 9s ease-in-out infinite`,
            animationDelay: '1.5s',
          }}
        >
          <StorageIcon sx={{ fontSize: '3.5rem' }} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '12%',
            bottom: '40%',
            color: 'rgba(9,132,227,0.2)',
            animation: `${float} 7s ease-in-out infinite`,
            animationDelay: '0.5s',
          }}
        >
          <DeveloperModeIcon sx={{ fontSize: '4rem' }} />
        </Box>

        {/* Code snippets */}
        <Box
          sx={{
            position: 'absolute',
            left: '3%',
            top: '40%',
            color: 'rgba(9,132,227,0.1)',
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            animation: `${float} 8s ease-in-out infinite`,
            animationDelay: '1s',
            transform: 'rotate(-15deg)',
          }}
        >
          {"</>"}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: '5%',
            top: '60%',
            color: 'rgba(9,132,227,0.1)',
            fontFamily: 'monospace',
            fontSize: '1.2rem',
            animation: `${float} 10s ease-in-out infinite`,
            animationDelay: '2s',
            transform: 'rotate(15deg)',
          }}
        >
          {"{code}"}
        </Box>
      </Box>

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
          {/* Timeline line with gradient */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, rgba(9,132,227,0.8) 0%, rgba(9,132,227,0.2) 100%)',
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
                  flexDirection: { xs: 'column', md: 'row' },
                  mb: index === experiences.length - 1 ? 0 : 8,
                  position: 'relative',
                  animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
                }}
              >
                {/* Timeline dot with pulse effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '16px', md: '50%' },
                    transform: { xs: 'none', md: 'translateX(-50%)' },
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    border: '3px solid',
                    borderColor: 'secondary.light',
                    zIndex: 2,
                    boxShadow: '0 0 0 4px rgba(9,132,227,0.2)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: { xs: 'scale(1.2)', md: 'translateX(-50%) scale(1.2)' },
                      boxShadow: '0 0 0 6px rgba(9,132,227,0.3)',
                    },
                  }}
                />

                {/* Connecting arrow */}
                {index < experiences.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '16px', md: '50%' },
                      transform: { xs: 'none', md: 'translateX(-50%)' },
                      bottom: '-40px',
                      height: '40px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 1,
                    }}
                  >
                    <ArrowDownwardIcon 
                      sx={{ 
                        color: 'secondary.main',
                        fontSize: '2rem',
                        animation: `${pulse} 2s infinite`,
                      }} 
                    />
                  </Box>
                )}

                {/* Content card */}
                <Paper
                  sx={{
                    flex: 1,
                    ml: { xs: 5, md: 8 },
                    mr: { xs: 0, md: 0 },
                    p: 3,
                    bgcolor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    animation: `${slideIn} 1s ease-out ${index * 0.2}s backwards`,
                    width: { md: 'calc(100% - 10rem)' },
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: 4,
                      border: '2px solid',
                      borderColor: 'secondary.main',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Top section with title and metadata */}
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: { xs: 'column', md: 'row' },
                      justifyContent: 'space-between', 
                      alignItems: { xs: 'flex-start', md: 'flex-start' }, 
                      gap: 2 
                    }}>
                      {/* Title and company */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <IconButton
                          sx={{
                            bgcolor: 'secondary.main',
                            color: 'white',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': { 
                              bgcolor: 'secondary.dark',
                              transform: 'rotate(360deg)',
                            },
                          }}
                        >
                          <BusinessIcon />
                        </IconButton>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                            {experience.role}
                          </Typography>
                          <Typography variant="h6" sx={{ color: 'secondary.main', mb: { xs: 1, md: 0 } }}>
                            {experience.company}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Date and location chips */}
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'row', md: 'column' }, 
                        gap: 1,
                        flexWrap: 'wrap',
                        alignItems: { xs: 'flex-start', md: 'flex-end' },
                      }}>
                        <Chip
                          icon={<DateRangeIcon />}
                          label={experience.duration}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(9,132,227,0.1)',
                            color: 'white',
                            border: '1px solid rgba(9,132,227,0.3)',
                            '&:hover': {
                              bgcolor: 'rgba(9,132,227,0.2)',
                            },
                          }}
                        />
                        <Chip
                          icon={<LocationOnIcon />}
                          label={experience.location}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(9,132,227,0.1)',
                            color: 'white',
                            border: '1px solid rgba(9,132,227,0.3)',
                            '&:hover': {
                              bgcolor: 'rgba(9,132,227,0.2)',
                            },
                          }}
                        />
                      </Box>
                    </Box>

                    {/* Bullet points */}
                    <Box component="ul" sx={{ m: 0, pl: 2, mt: 2 }}>
                      {experience.bullets.map((bullet, i) => (
                        <Typography
                          key={i}
                          component="li"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            mb: 1,
                            position: 'relative',
                            '&::marker': {
                              color: 'secondary.main',
                            },
                            '&:hover': {
                              color: 'white',
                            },
                            transition: 'color 0.3s ease-in-out',
                          }}
                        >
                          {bullet}
                        </Typography>
                      ))}
                    </Box>
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
