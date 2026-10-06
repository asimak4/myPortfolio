import React from 'react';
import { Box, Typography, Button, Container, IconButton, Chip, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import homeScreenIcon from '../../assets/homePageIcon1.png';
import { scrollToSection } from '../../utils/scroll';
import TypewriterText from '../shared/TypewriterText';

const rolePhrases = [
  'Software Developer',
  'Full Stack Developer',
  'Backend & Cloud Engineer',
];

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
`;

const skills = ['TypeScript', 'React', 'Python', 'AWS', 'Node.js', 'Docker'];

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: 'flex',
        alignItems: 'center',
        scrollMarginTop: "80px",
        borderBottom: '1px solid rgba(243, 239, 228, 0.1)',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1280, height: '100%', display: 'flex', alignItems: 'center', px: { xs: 2.5, md: 5 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: '100%',
            gap: { xs: 6, md: 8 },
            pt: { xs: 15, md: 13 },
            pb: { xs: 8, md: 7 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              color: 'primary.main',
              animation: `${fadeIn} 1s ease-out`,
              textAlign: { xs: 'center', md: 'left' },
              position: 'relative',
            }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'secondary.main',
                mb: 3,
                display: 'block',
                fontSize: '0.7rem',
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              01 / PORTFOLIO — 2026
            </Typography>
            
            <Typography 
              variant='h1' 
              sx={{ 
                color: 'primary.main',
                fontSize: { xs: '4rem', sm: '5.2rem', md: '6.4rem' },
                lineHeight: 0.84,
                mb: 3.5,
                animation: `${fadeIn} 1s ease-out 0.2s backwards`,
              }}
            >
              Alexander
              <Box component="span" sx={{ display: 'block', color: 'secondary.main', fontStyle: 'italic', ml: { md: 7 } }}>
                Simak.
              </Box>
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1.5,
                mb: 2.5,
                animation: `${fadeIn} 1s ease-out 0.4s backwards`,
              }}
            >
              <Box sx={{ width: 34, height: 1, bgcolor: 'secondary.main' }} />
              <TypewriterText
                phrases={rolePhrases}
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontWeight: 400,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                }}
              />
            </Box>

            <Typography
              component="p"
              sx={{
                color: 'text.secondary',
                mb: 3.5,
                maxWidth: '510px',
                mx: { xs: 'auto', md: 0 },
                fontSize: { xs: '1rem', md: '1.08rem' },
                lineHeight: 1.75,
                fontWeight: 400,
                animation: `${fadeIn} 1s ease-out 0.6s backwards`,
              }}
            >
              I&apos;m a software developer at Xcelerate Solutions. I work on data-heavy backend systems and build web applications with React, Node.js, Python, and AWS.
            </Typography>

            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              sx={{ 
                mb: 4,
                gap: 0,
                justifyContent: { xs: 'center', md: 'flex-start' },
                animation: `${fadeIn} 1s ease-out 0.8s backwards`,
              }}
            >
              {skills.map((skill, index) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    bgcolor: 'transparent',
                    color: 'text.secondary',
                    border: 0,
                    borderRight: index < skills.length - 1 ? '1px solid rgba(243, 239, 228, 0.16)' : 0,
                    borderRadius: 0,
                    height: 20,
                    fontWeight: 500,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.62rem',
                    letterSpacing: '0.04em',
                    '&:hover': {
                      color: 'secondary.main',
                      bgcolor: 'transparent',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Stack>

            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                alignItems: { xs: 'stretch', sm: 'center' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                animation: `${fadeIn} 1s ease-out 1s backwards`,
              }}
            >
              <Button 
                variant="contained" 
                color="secondary"
                size="large"
                startIcon={<LaunchIcon />}
                onClick={() => scrollToSection('projects')}
                sx={{ 
                  px: 3.5,
                  py: 1.4,
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: '#090C0B',
                  boxShadow: 'none',
                  background: 'secondary.main',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    background: 'secondary.light',
                    boxShadow: '0 10px 30px rgba(91, 127, 208, 0.24)',
                  }
                }}
              >
                View Projects
              </Button>
              

              <Box sx={{ 
                display: 'flex', 
                gap: 1,
                justifyContent: 'center',
                mt: { xs: 1, sm: 0 }
              }}>
                <IconButton 
                  href="https://github.com/asimak4" 
                  target="_blank" 
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'transparent',
                    border: '1px solid rgba(243, 239, 228, 0.18)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      borderColor: 'secondary.main',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton 
                  href="https://www.linkedin.com/in/alex-simak-920a6b146/" 
                  target="_blank" 
                  sx={{
                    color: 'primary.main',
                    bgcolor: 'transparent',
                    border: '1px solid rgba(243, 239, 228, 0.18)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      borderColor: 'secondary.main',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flex: { xs: 0, md: 1 },
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              animation: `${float} 6s ease-in-out infinite`,
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: 'min(38vw, 440px)',
                aspectRatio: '1 / 1',
                display: 'grid',
                placeItems: 'center',
                border: '1px solid rgba(243, 239, 228, 0.14)',
                borderRadius: '50%',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '9%',
                  border: '1px dashed rgba(91, 127, 208, 0.38)',
                  borderRadius: '50%',
                },
                '&::after': {
                  content: '"REACT / NODE / PYTHON / AWS"',
                  position: 'absolute',
                  bottom: '5%',
                  right: '-2%',
                  color: 'text.secondary',
                  fontFamily: '"IBM Plex Mono", monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.16em',
                  bgcolor: 'background.default',
                  px: 1.5,
                },
              }}
            >
              <img 
                src={homeScreenIcon} 
                alt='Developer Illustration' 
                style={{ 
                  width: '76%',
                  height: 'auto',
                  filter: 'brightness(0) saturate(100%) invert(50%) sepia(38%) saturate(1050%) hue-rotate(184deg) brightness(88%) contrast(88%) drop-shadow(0 0 28px rgba(91, 127, 208, 0.28))',
                }} 
              />
              <Typography
                sx={{
                  position: 'absolute',
                  top: '7%',
                  left: '3%',
                  color: '#CF673F',
                  fontFamily: '"Bodoni Moda", serif',
                  fontSize: '3rem',
                  fontStyle: 'italic',
                }}
              >
                01
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
