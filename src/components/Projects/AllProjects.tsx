// src/components/Projects/AllProjects.tsx
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { projects } from './projectsList';
import ProjectCard from './ProjectCard';

const AllProjects: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#24272B",
        padding: "0 20px",
      }}
    >
      <Box sx={{ textAlign: 'left', width: '100%', maxWidth: '75vw', py: 10 }}>
        <Typography variant="h3" gutterBottom sx={{ color: 'white', marginBottom: '40px' }}>
          All Projects
        </Typography>

        <Grid
          container
          spacing={3}
          justifyContent="center"
        >
          {projects.map((project, index) => (
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
        <Box sx={{p: 2, textAlign: 'right', width: '100%', maxWidth: '75vw'}}>
          <Button
            component={Link} // Use Link component for navigation
            to="/"
            variant="contained"
            size="small"
            sx={{ backgroundColor: '#00b0ff', color: '#fff', '&:hover': { backgroundColor: '#0088cc' } }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AllProjects;
