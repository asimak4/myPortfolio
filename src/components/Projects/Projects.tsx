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
        py: { xs: 10, md: 16 },
        scrollMarginTop: "80px",
        borderBottom: '1px solid rgba(243, 239, 228, 0.1)',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1280, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 2.5, md: 5 } }}>
        <Box sx={{ 
          textAlign: 'left',
          width: '100%', 
          mb: { xs: 6, md: 9 },
          display: { md: 'grid' },
          gridTemplateColumns: '1.2fr 0.8fr',
          alignItems: 'end',
          gap: 8,
          animation: `${fadeIn} 1s ease-out`,
        }}>
          <Box>
            <Typography
              variant="overline"
              sx={{ color: 'secondary.main', mb: 3, display: 'block', fontSize: '0.7rem' }}
            >
              03 / SELECTED WORK
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: 'primary.main', fontSize: { xs: '3.4rem', sm: '4rem', md: '5.5rem' }, lineHeight: 0.98 }}
            >
              Selected <Box component="span" sx={{ color: '#CF673F', fontStyle: 'italic' }}>projects.</Box>
            </Typography>
          </Box>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '470px',
              mt: { xs: 3, md: 0 },
              pb: { md: 1 },
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.85
            }}
          >
            A few web apps, mobile apps, and tools I&apos;ve built.
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
              px: 4,
              py: 1.4,
              minWidth: '220px',
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
            {!showAllProjs ? 'Show More Projects' : 'Show Less'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
