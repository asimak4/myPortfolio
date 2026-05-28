import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import { projects } from './projectsList';
import ProjectCard from './ProjectCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Projects: React.FC = () => {
  const [showAllProjs, setShowAllProj] = React.useState(false);
  const [projLen, setProjLen] = React.useState(6);

  React.useEffect(() => {
    if (showAllProjs) {
      setProjLen(projects.length);
    } else if (projLen !== 6) {
      document.querySelector(`#projects`)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setProjLen(6);
    }
  }, [showAllProjs, projLen]);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: { xs: "100vh", md: "100vh" },
        position: "relative",
        overflow: "visible",
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: { xs: 2, md: 4 } }}>
        <Box sx={{ 
          textAlign: 'center', 
          width: '100%', 
          mb: { xs: 3, md: 6 }, 
          animation: `${fadeIn} 1s ease-out`,
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
            MY WORK
          </Typography>
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 800,
              color: 'white',
              mb: { xs: 2, md: 3 },
              background: 'linear-gradient(135deg, #FFFFFF 0%, #74B9FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Featured Projects
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
            Explore my portfolio of projects that demonstrate expertise in modern web development, mobile applications, and innovative solutions.
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{ 
            animation: `${fadeIn} 1s ease-out 0.2s backwards`,
            '& .MuiGrid-item': {
              display: 'flex',
            }
          }}
        >
          {projects.slice(0, projLen).map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              lg={4} 
              key={index}
              sx={{ 
                animation: `${fadeIn} 1s ease-out ${index * 0.1}s backwards`,
                display: 'flex'
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                links={project.links}
                techUsed={project.techUsed}
              />
            </Grid>
          ))}
        </Grid>

        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 8,
            animation: `${fadeIn} 1s ease-out 0.4s backwards`
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setShowAllProj(!showAllProjs)}
            endIcon={showAllProjs ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            sx={{ 
              borderRadius: 3,
              px: 5,
              py: 2,
              minWidth: '220px',
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
            {!showAllProjs ? 'Show More Projects' : 'Show Less'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
