import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { projects } from './projectsList';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {

  const [showAllProjs, setShowAllProj] = React.useState(false);
  const [projLen, setProjLen] = React.useState(6);

  React.useEffect(()=> {
    if(showAllProjs){
      setProjLen(projects.length);
      // if prevents page from going to projects on refresh
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
          Featured Projects
        </Typography>

        <Grid
          container
          spacing={3} // Adjust this value to control the spacing between cards
          justifyContent="center" // Center the grid items horizontally
        >
          {projects.slice(0, projLen).map((project, index) => (
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
        <Button onClick={()=>setShowAllProj(!showAllProjs)} variant="contained" size="small" sx={{ backgroundColor: '#00b0ff', color: '#fff', '&:hover': { backgroundColor: '#0088cc' } }}>
          {
            !showAllProjs ? 
            <>More Projects</>
            :
            <>Hide Projects</>
          }
        </Button>
      </Box>
      </Box>
    </Box>
  );
};

export default Projects;
