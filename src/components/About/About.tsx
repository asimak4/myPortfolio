import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Grid, IconButton, Card, CardContent, Divider } from '@mui/material';
import { keyframes } from '@mui/system';
import { aboutMeText } from './aboutMe';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(-30px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
`;


const highlights = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Full Stack Development",
    description: "Experienced in building end-to-end web applications using modern technologies"
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    title: "Continuous Learning",
    description: "Always staying updated with the latest technologies and best practices"
  },
  {
    icon: <WorkIcon fontSize="large" />,
    title: "Problem Solver",
    description: "Passionate about finding elegant solutions to complex challenges"
  }
];

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={aboutRef}
      id="about"
      sx={{
        minHeight: "60vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 3, md: 4 },
        pb: { xs: 0, md: 0 },
        pt: { xs: 12, md: 12 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              animation: isVisible ? `${slideIn} 1s ease-out` : 'none',
              opacity: isVisible ? 1 : 0,
            }}>
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
                ABOUT ME
              </Typography>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 800,
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #74B9FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
                }}
              >
                Turning Vision Into Reality
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                {aboutMeText}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} key={highlight.title}>
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
                      animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
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
                        border: '1px solid rgba(9, 132, 227, 0.3)',
                        boxShadow: '0 20px 40px rgba(9, 132, 227, 0.1)',
                        '&::before': {
                          left: '100%',
                        },
                        '& .highlight-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          bgcolor: 'secondary.light',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 2,
                        mb: 2 
                      }}>
                        <IconButton
                          className="highlight-icon"
                          sx={{
                            bgcolor: 'secondary.main',
                            color: 'white',
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: '0 4px 12px rgba(9, 132, 227, 0.3)',
                            '&:hover': { bgcolor: 'secondary.main' },
                          }}
                        >
                          {highlight.icon}
                        </IconButton>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            gutterBottom 
                            sx={{ 
                              fontWeight: 700,
                              color: 'white',
                              fontSize: '1.25rem',
                              mb: 1
                            }}
                          >
                            {highlight.title}
                          </Typography>
                          <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
                          <Typography 
                            variant="body1" 
                            sx={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.95rem',
                              lineHeight: 1.6
                            }}
                          >
                            {highlight.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
