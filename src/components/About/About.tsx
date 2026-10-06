import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
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
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 16 },
        scrollMarginTop: "80px",
        borderBottom: '1px solid rgba(243, 239, 228, 0.1)',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1280, px: { xs: 2.5, md: 5 } }}>
        <Grid container spacing={{ xs: 7, md: 10 }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ 
              animation: isVisible ? `${slideIn} 1s ease-out` : 'none',
              opacity: isVisible ? 1 : 0,
            }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'secondary.main',
                  mb: 3,
                  display: 'block',
                  fontSize: '0.7rem'
                }}
              >
                02 / ABOUT
              </Typography>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{ 
                  color: 'primary.main',
                  mb: 5,
                  maxWidth: 650,
                  fontSize: { xs: '3.4rem', md: '5.5rem' },
                  lineHeight: 0.98
                }}
              >
                Engineering with <Box component="span" sx={{ color: '#CF673F', fontStyle: 'italic' }}>intent.</Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  maxWidth: 660,
                  fontSize: { xs: '1rem', md: '1.12rem' },
                  lineHeight: 1.9,
                  color: 'text.secondary',
                }}
              >
                {aboutMeText}
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Box sx={{ borderTop: '1px solid rgba(243, 239, 228, 0.18)' }}>
              {highlights.map((highlight, index) => (
                  <Card
                    key={highlight.title}
                    sx={{
                      bgcolor: 'transparent',
                      borderRadius: 0,
                      border: 0,
                      borderBottom: '1px solid rgba(243, 239, 228, 0.18)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'background-color 0.35s ease, padding 0.35s ease',
                      animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
                      '&:hover': {
                        bgcolor: 'rgba(91, 127, 208, 0.06)',
                        '& .highlight-arrow': { transform: 'translate(4px, -4px)', color: 'secondary.main' },
                      },
                    }}
                  >
                    <CardContent sx={{ py: 3.5, px: 1 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 2.5,
                      }}>
                        <Typography
                          sx={{
                            color: 'secondary.main',
                            fontFamily: '"IBM Plex Mono", monospace',
                            fontSize: '0.7rem',
                            pt: 0.6,
                          }}
                        >
                          0{index + 1}
                        </Typography>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            gutterBottom 
                            sx={{ 
                              fontWeight: 700,
                              color: 'primary.main',
                              fontSize: '1.1rem',
                              mb: 1.2
                            }}
                          >
                            {highlight.title}
                          </Typography>
                          <Typography 
                            variant="body1" 
                            sx={{
                              color: 'text.secondary',
                              fontSize: '0.9rem',
                              lineHeight: 1.7
                            }}
                          >
                            {highlight.description}
                          </Typography>
                        </Box>
                        <Typography className="highlight-arrow" sx={{ color: 'text.secondary', transition: 'all 0.3s ease' }}>
                          ↗
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
