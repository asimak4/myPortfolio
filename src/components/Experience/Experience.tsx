import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, Chip, IconButton, Collapse, Stack, Divider } from '@mui/material';
import { keyframes } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import { experiences } from './workExperience';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <Box
      id="experience"
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 12 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', width: '100%', mb: 8, animation: `${fadeIn} 1s ease-out` }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'secondary.main',
              letterSpacing: 3,
              mb: 2,
              display: 'block',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}
          >
            CAREER JOURNEY
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: 'white',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #ffffff 0%, #0984e3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Work Experience
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              mx: 'auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
            }}
          >
            My professional journey across innovative companies and meaningful projects
          </Typography>
        </Box>

        <Stack spacing={4}>
          {experiences.map((experience, index) => (
            <Card
              key={index}
              sx={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(9,132,227,0.05) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                animation: `${fadeIn} 0.8s ease-out ${index * 0.1}s backwards`,
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-2px) scale(1.005)',
                  boxShadow: '0 10px 20px rgba(9, 132, 227, 0.2)',
                  border: '1px solid rgba(9, 132, 227, 0.3)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #0984e3, #74b9ff)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box 
                  onClick={() => handleExpandClick(index)}
                  sx={{ 
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: 3,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flex: 1 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #0984e3, #74b9ff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(9, 132, 227, 0.3)',
                      }}
                    >
                      <WorkIcon sx={{ color: 'white', fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700,
                          color: 'white',
                          mb: 0.5,
                          letterSpacing: '-0.5px'
                        }}
                      >
                        {experience.role}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'secondary.main',
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {experience.company}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ 
                    display: 'flex', 
                    gap: 1.5,
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}>
                    <Chip
                      icon={<DateRangeIcon />}
                      label={experience.duration}
                      sx={{
                        bgcolor: 'rgba(116,185,255,0.15)',
                        color: 'white',
                        border: '1px solid rgba(116,185,255,0.4)',
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: '#74b9ff',
                        },
                      }}
                    />
                    <Chip
                      icon={<LocationOnIcon />}
                      label={experience.location}
                      sx={{
                        bgcolor: 'rgba(116,185,255,0.15)',
                        color: 'white',
                        border: '1px solid rgba(116,185,255,0.4)',
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: '#74b9ff',
                        },
                      }}
                    />
                    <IconButton
                      sx={{
                        transform: expandedId === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: 'secondary.main',
                        bgcolor: 'rgba(116,185,255,0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(116,185,255,0.2)',
                        },
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Collapse in={expandedId === index}>
                  <Box sx={{ mt: 4 }}>
                    <Divider sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Stack spacing={2}>
                      {experience.bullets.map((bullet, i) => (
                        <Box 
                          key={i} 
                          sx={{ 
                            display: 'flex',
                            alignItems: 'flex-start',
                            opacity: 0.9,
                            transition: 'all 0.2s ease',
                            p: 0,
                            borderRadius: 1,
                            // '&:hover': {
                            //   opacity: 1,
                            //   bgcolor: 'rgba(255,255,255,0.03)',
                            //   transform: 'translateX(8px)',
                            // },
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #0984e3, #74b9ff)',
                              mt: 1,
                              mr: 2,
                              flexShrink: 0,
                              boxShadow: '0 2px 4px rgba(9, 132, 227, 0.4)',
                            }}
                          />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              lineHeight: 1.6,
                              fontSize: '0.95rem'
                            }}
                          >
                            {bullet}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
