import React from 'react';
import { Box, Typography, Grid, Button, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import { projects } from './projectsList';
import ProjectCard from './ProjectCard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FloatingDecorations from '../shared/FloatingDecorations';

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
      document.querySelector(`#projects`)?.scrollIntoView({ behavior: 'smooth' });
      setProjLen(6);
    }
  }, [showAllProjs, projLen]);

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      <FloatingDecorations variant="tertiary" />
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
            MY WORK
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
            Featured Projects
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              mb: 4,
            }}
          >
            Here are some of my recent projects that showcase my skills and experience in web development.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{ animation: `${fadeIn} 1s ease-out 0.2s backwards` }}
        >
          {projects.slice(0, projLen).map((project, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={index}
              sx={{ 
                animation: `${fadeIn} 1s ease-out ${index * 0.1}s backwards`
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
            mt: 6,
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
              borderRadius: 2,
              px: 4,
              py: 1.5,
              minWidth: '200px',
            }}
          >
            {!showAllProjs ? 'Show More' : 'Show Less'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
