import React, { useState } from 'react';
import { Box, Typography, Container, Paper, Chip, IconButton, Collapse } from '@mui/material';
import { keyframes } from '@mui/system';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experiences.map((experience, index) => (
            <Paper
              key={index}
              sx={{
                p: 3,
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease-in-out',
                animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 30px rgba(9, 132, 227, 0.15)',
                },
              }}
            >
              <Box 
                onClick={() => handleExpandClick(index)}
                sx={{ 
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  justifyContent: 'space-between',
                  alignItems: { xs: 'flex-start', md: 'center' },
                  gap: 2,
                }}
              >
                {/* Company and Role */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    <BusinessIcon />
                  </IconButton>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {experience.role}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
                      {experience.company}
                    </Typography>
                  </Box>
                </Box>

                {/* Date and Location */}
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1,
                  flexWrap: 'wrap',
                  alignItems: 'center'
                }}>
                  <Chip
                    icon={<DateRangeIcon />}
                    label={experience.duration}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(9,132,227,0.1)',
                      color: 'white',
                      border: '1px solid rgba(9,132,227,0.3)',
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
                    }}
                  />
                  <IconButton
                    sx={{
                      transform: expandedId === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s',
                      color: 'secondary.main',
                    }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
              </Box>

              <Collapse in={expandedId === index}>
                <Box sx={{ mt: 3, pl: { xs: 0, md: 7 } }}>
                  {experience.bullets.map((bullet, i) => (
                    <Box 
                      key={i} 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 1,
                        opacity: 0.85,
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'secondary.main',
                          mt: 1.5,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                        {bullet}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
