import React from 'react';
import { Grid, Typography, Chip, Card, CardContent, Box, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import { skillsList } from './SkillsandHobbies';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import OutsideTheIDESection from './OutsideTheIDESection';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
  'Programming Languages': '#5B7FD0',
  'Operating Systems': '#5B7FD0',
  'Networking': '#5B7FD0',
  'Software/Frameworks': '#5B7FD0',
  'Amazon Web Services': '#CF673F',
  'Foreign Languages': '#CF673F',
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
        py: { xs: 10, md: 16 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1280, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 2.5, md: 5 } }}>
        <Box 
          sx={{ 
            textAlign: 'left',
            width: '100%', 
            mb: { xs: 6, md: 9 },
            animation: `${fadeIn} 1s ease-out`,
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'secondary.main',
              mb: 3,
              display: 'block',
              fontSize: '0.7rem'
            }}
          >
            05 / SKILLS
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              color: 'primary.main',
              fontSize: { xs: '3.4rem', sm: '4rem', md: '5.5rem' },
              lineHeight: 0.98,
              mb: { xs: 3, md: 3 },
            }}
          >
            Technical <Box component="span" sx={{ color: '#CF673F', fontStyle: 'italic' }}>skills.</Box>
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '700px',
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8
            }}
          >
            Languages, frameworks, platforms, and tools I&apos;ve worked with.
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
                  bgcolor: '#0D110F',
                  borderRadius: 0,
                  border: '1px solid rgba(243, 239, 228, 0.12)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.35s ease, border-color 0.35s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '42px',
                    height: '2px',
                    background: categoryColors[category],
                    transition: 'width 0.4s ease-in-out',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: `${categoryColors[category]}55`,
                    boxShadow: '0 24px 60px rgba(0,0,0,0.24)',
                    '&::before': {
                      width: '100%',
                    },
                    '& .category-icon': {
                      transform: 'rotate(-8deg)',
                      color: categoryColors[category],
                    },
                    '& .skill-chip': {
                      color: 'primary.main',
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
                    borderBottom: '1px solid rgba(243, 239, 228, 0.1)'
                  }}>
                    <Box
                      className="category-icon"
                      sx={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: '50%',
                        bgcolor: 'transparent',
                        color: 'text.secondary',
                        border: `1px solid ${categoryColors[category]}55`,
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {categoryIcons[category] || <CodeIcon />}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
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
                          bgcolor: 'transparent',
                          color: 'text.secondary',
                          border: '1px solid rgba(243, 239, 228, 0.13)',
                          fontWeight: 500,
                          fontFamily: '"IBM Plex Mono", monospace',
                          fontSize: '0.75rem',
                          transition: 'all 0.3s ease',
                          transitionDelay: `${i * 0.05}s`,
                          '&:hover': {
                            color: categoryColors[category],
                            bgcolor: `${categoryColors[category]}0D`,
                            borderColor: `${categoryColors[category]}55`,
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

        <OutsideTheIDESection />
      </Container>
    </Box>
  );
};

export default SkillsPage;
