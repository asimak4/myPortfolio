import React from 'react';
import { Box, Typography, Button, Container, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import homeScreenIcon from '../../assets/homePageIcon1.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2D3436 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(4, 180, 231, 0.1) 0%, rgba(0, 248, 130, 0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
        }
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "100vh",
            pt: { xs: 12, md: 0 },
            gap: 4,
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
                letterSpacing: 2,
                mb: 2,
                display: 'block',
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>
            
            <Typography 
              variant='h2' 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(90deg, #fff, #04b4e7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: `${fadeIn} 1s ease-out 0.2s backwards`,
              }}
            >
              Alexander Simak
            </Typography>

            <Typography 
              variant='h4' 
              sx={{ 
                mb: 3,
                color: 'rgba(255,255,255,0.9)',
                animation: `${fadeIn} 1s ease-out 0.4s backwards`,
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
              variant='h6'
              sx={{
                color: 'rgba(255,255,255,0.7)',
                mb: 4,
                maxWidth: '600px',
                animation: `${fadeIn} 1s ease-out 0.6s backwards`,
              }}
            >
              The world has a lot of problems, I want to be the one finding the solutions.
            </Typography>

            <Box 
              sx={{ 
                display: 'flex', 
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
                animation: `${fadeIn} 1s ease-out 0.8s backwards`,
              }}
            >
              <Button 
                variant="contained" 
                color="secondary"
                size="large"
                href="#projects"
                sx={{ 
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                }}
              >
                View Projects
              </Button>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton href="https://github.com/asimak4" target="_blank" color="inherit">
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/alex-simak-920a6b146/" target="_blank" color="inherit">
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: `${float} 6s ease-in-out infinite`,
            }}
          >
            <img 
              src={homeScreenIcon} 
              alt='Developer Illustration' 
              style={{ 
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(4, 180, 231, 0.3))',
              }} 
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
