import React from 'react';
import { Box, Typography, Button, Container, IconButton, Card, Chip, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import DownloadIcon from '@mui/icons-material/Download';
import homeScreenIcon from '../../assets/homePageIcon1.png';

type SectionType = 'home' | 'about' | 'projects' | 'experience' | 'skills';

interface HomeProps {
  onSectionChange?: (section: SectionType) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const skills = ['TypeScript', 'React', 'Python', 'AWS', 'Node.js', 'Docker'];

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  return (
    <Box
      id="home"
      sx={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: '100%',
            gap: { xs: 3, md: 6 },
            py: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              color: 'white',
              animation: `${fadeIn} 1s ease-out`,
              textAlign: { xs: 'center', md: 'left' },
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
                fontSize: '0.875rem',
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>
            
            <Typography 
              variant='h1' 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #74B9FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '3rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 2,
                animation: `${fadeIn} 1s ease-out 0.2s backwards`,
              }}
            >
              Alexander Simak
            </Typography>

            <Card
              sx={{
                bgcolor: 'rgba(9, 132, 227, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(9, 132, 227, 0.3)',
                borderRadius: 3,
                px: 3,
                py: 1.5,
                mb: 3,
                display: 'inline-block',
                animation: `${fadeIn} 1s ease-out 0.4s backwards, ${pulse} 3s ease-in-out infinite`,
              }}
            >
              <Typography 
                variant='h4' 
                sx={{ 
                  color: 'secondary.light',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Full Stack Developer
              </Typography>
            </Card>

            <Typography
              variant='h6'
              sx={{
                color: 'rgba(255,255,255,0.85)',
                mb: 3,
                maxWidth: '550px',
                fontSize: '1.2rem',
                lineHeight: 1.6,
                fontWeight: 400,
                animation: `${fadeIn} 1s ease-out 0.6s backwards`,
              }}
            >
              The world has a lot of problems, I want to be the one finding the solutions.
            </Typography>

            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              sx={{ 
                mb: 4,
                gap: 1,
                animation: `${fadeIn} 1s ease-out 0.8s backwards`,
              }}
            >
              {skills.map((skill, index) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'rgba(9, 132, 227, 0.2)',
                      border: '1px solid rgba(9, 132, 227, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                    transitionDelay: `${index * 0.1}s`,
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
                onClick={() => onSectionChange?.('projects')}
                sx={{ 
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 8px 24px rgba(9, 132, 227, 0.3)',
                  background: 'linear-gradient(135deg, #0984E3 0%, #74B9FF 100%)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(9, 132, 227, 0.4)',
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
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(9, 132, 227, 0.2)',
                      border: '1px solid rgba(9, 132, 227, 0.4)',
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
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(9, 132, 227, 0.2)',
                      border: '1px solid rgba(9, 132, 227, 0.4)',
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
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'linear-gradient(45deg, rgba(9, 132, 227, 0.1), rgba(116, 185, 255, 0.1))',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: -1,
                }
              }}
            >
              <img 
                src={homeScreenIcon} 
                alt='Developer Illustration' 
                style={{ 
                  width: '100%',
                  maxWidth: '450px',
                  height: 'auto',
                  filter: 'drop-shadow(0 0 30px rgba(9, 132, 227, 0.4))',
                  borderRadius: '20px',
                }} 
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
