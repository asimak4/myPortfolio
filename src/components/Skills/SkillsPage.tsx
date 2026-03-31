import React from 'react';
import { Grid, Typography, Chip, Card, CardContent, Box, Container, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import { skillsList } from './SkillsandHobbies';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

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
  'Programming Languages': <CodeIcon />,
  'Operating Systems': <SettingsSystemDaydreamIcon />,
  'Networking': <NetworkCheckIcon />,
  'Software/Frameworks': <BuildIcon />,
  'Amazon Web Services': <CloudIcon />,
  'Foreign Languages': <LanguageIcon />,
};

const categoryColors: { [key: string]: string } = {
  'Programming Languages': '#FF6B6B',
  'Operating Systems': '#4ECDC4', 
  'Networking': '#45B7D1',
  'Software/Frameworks': '#96CEB4',
  'Amazon Web Services': '#FFEAA7',
  'Foreign Languages': '#DDA0DD',
};

const SkillsPage = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: { xs: "100vh", md: "80vh" },
        position: "relative",
        overflow: "visible",
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: { xs: 2, md: 4 } }}>
        <Box 
          sx={{ 
            textAlign: 'center', 
            width: '100%', 
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'secondary.main',
              letterSpacing: 3,
              mb: 2,
              display: 'block',
              fontWeight: 600,
              fontSize: '0.875rem'
            }}
          >
            EXPERTISE
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #74B9FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: { xs: 2, md: 3 },
            }}
          >
            Skills & Technologies
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '700px',
              mx: 'auto',
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8
            }}
          >
            A comprehensive overview of my technical expertise and professional toolkit.
          </Typography>
        </Box>

        {/* Technical Skills */}
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ flexGrow: 1, alignContent: 'center' }}>
          {Object.entries(skillsList).map(([category, items], index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={4} 
              key={category}
              sx={{
                animation: `${fadeIn} 1s ease-out ${index * 0.1}s backwards`
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 6,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                    transition: 'left 0.5s ease-in-out',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    border: `1px solid ${categoryColors[category]}40`,
                    boxShadow: `0 20px 40px ${categoryColors[category]}20`,
                    '&::before': {
                      left: '100%',
                    },
                    '& .category-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      bgcolor: categoryColors[category],
                    },
                    '& .skill-chip': {
                      transform: 'translateY(-2px)',
                      bgcolor: `${categoryColors[category]}20`,
                      border: `1px solid ${categoryColors[category]}40`,
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 3 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Header */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: { xs: 1.5, md: 2 }, 
                    mb: { xs: 1.5, md: 2 },
                    pb: { xs: 1.5, md: 2 },
                    borderBottom: `2px solid ${categoryColors[category]}30`
                  }}>
                    <IconButton
                      className="category-icon"
                      size="medium"
                      sx={{
                        bgcolor: categoryColors[category],
                        color: 'white',
                        transition: 'all 0.3s ease-in-out',
                        boxShadow: `0 4px 12px ${categoryColors[category]}40`,
                        '&:hover': { bgcolor: categoryColors[category] },
                      }}
                    >
                      {categoryIcons[category] || <CodeIcon />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.3
                      }}
                    >
                      {category}
                    </Typography>
                  </Box>

                  {/* Skills */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1,
                    flexGrow: 1,
                    alignContent: 'flex-start'
                  }}>
                    {items.map((item, i) => (
                      <Chip
                        key={item}
                        label={item}
                        className="skill-chip"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          transition: 'all 0.3s ease',
                          transitionDelay: `${i * 0.05}s`,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            bgcolor: `${categoryColors[category]}20`,
                            border: `1px solid ${categoryColors[category]}60`,
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default SkillsPage;
