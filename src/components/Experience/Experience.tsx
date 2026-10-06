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
        py: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: "80px",
        borderBottom: '1px solid rgba(243, 239, 228, 0.1)',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1120, px: { xs: 2.5, md: 5 } }}>
        <Box sx={{ textAlign: 'left', width: '100%', mb: { xs: 6, md: 10 }, animation: `${fadeIn} 1s ease-out` }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'secondary.main',
              mb: 3,
              display: 'block',
              fontSize: '0.7rem'
            }}
          >
            04 / EXPERIENCE
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              color: 'primary.main',
              mb: 3,
              fontSize: { xs: '3.4rem', md: '5.5rem' },
              lineHeight: 0.98,
            }}
          >
            Work <Box component="span" sx={{ color: '#CF673F', fontStyle: 'italic' }}>experience.</Box>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              fontSize: '1.05rem',
              lineHeight: 1.8,
            }}
          >
            The roles I&apos;ve held and what I worked on in each one.
          </Typography>
        </Box>

        <Stack spacing={0}>
          {experiences.map((experience, index) => (
            <Card
              key={index}
              sx={{
                background: 'transparent',
                border: 0,
                borderTop: '1px solid rgba(243, 239, 228, 0.16)',
                borderRadius: 0,
                overflow: 'hidden',
                transition: 'background-color 0.35s ease',
                animation: `${fadeIn} 0.8s ease-out ${index * 0.1}s backwards`,
                position: 'relative',
                '&:hover': {
                  background: 'rgba(91, 127, 208, 0.04)',
                },
                '&:last-child': { borderBottom: '1px solid rgba(243, 239, 228, 0.16)' },
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
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
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        border: '1px solid rgba(91, 127, 208, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <WorkIcon sx={{ color: 'secondary.main', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 0.5,
                          letterSpacing: '-0.5px'
                        }}
                      >
                        {experience.role}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: 'text.secondary',
                          fontWeight: 600,
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: '0.78rem',
                          letterSpacing: '0.06em',
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
                        bgcolor: 'transparent',
                        color: 'text.secondary',
                        border: '1px solid rgba(243, 239, 228, 0.14)',
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: '#5B7FD0',
                        },
                      }}
                    />
                    <Chip
                      icon={<LocationOnIcon />}
                      label={experience.location}
                      sx={{
                        bgcolor: 'transparent',
                        color: 'text.secondary',
                        border: '1px solid rgba(243, 239, 228, 0.14)',
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: '#5B7FD0',
                        },
                      }}
                    />
                    <IconButton
                      aria-label={`${expandedId === index ? 'Collapse' : 'Expand'} details for ${experience.role} at ${experience.company}`}
                      sx={{
                        transform: expandedId === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: 'secondary.main',
                        bgcolor: 'rgba(91, 127, 208, 0.08)',
                        '&:hover': {
                          bgcolor: 'rgba(91, 127, 208, 0.16)',
                        },
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>
                </Box>

                <Collapse in={expandedId === index}>
                  <Box sx={{ mt: 4 }}>
                    <Divider sx={{ mb: 3, bgcolor: 'rgba(243, 239, 228, 0.1)' }} />
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
                              background: '#5B7FD0',
                              mt: 1,
                              mr: 2,
                              flexShrink: 0,
                              boxShadow: '0 0 10px rgba(91, 127, 208, 0.45)',
                            }}
                          />
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: 'text.secondary',
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
