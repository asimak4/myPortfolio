import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { projects } from '../../assets/projectsList';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0c2127",
        padding: "0 20px",
      }}
    >
      <Box sx={{ textAlign: 'left', width: '100%', maxWidth: '1200px' }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'white', marginBottom: '40px' }}>
          Featured Projects
        </Typography>

        <Grid
          container
          spacing={3} // Adjust this value to control the spacing between cards
          justifyContent="center" // Center the grid items horizontally
        >
          {projects.slice(0, 6).map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
                techUsed={project.techUsed}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
