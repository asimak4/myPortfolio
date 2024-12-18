import React from 'react';
import { Card, CardContent, Typography, Box, Button, IconButton, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string | undefined;
  techUsed: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, techUsed }) => {
  const technologies = techUsed.split(',').map(tech => tech.trim());
  const isGithubLink = link?.includes('github.com');

  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: 4,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          '& .project-icon': {
            transform: 'rotate(5deg) scale(1.1)',
          }
        },
      }}
    >
      <CardContent sx={{ height: '100%', p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
            <IconButton 
              className="project-icon"
              sx={{ 
                bgcolor: 'secondary.main',
                color: 'white',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { bgcolor: 'secondary.dark' }
              }}
            >
              <CodeIcon />
            </IconButton>
          </Box>

          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              color: 'white',
              fontWeight: 600,
              mb: 2,
            }}
          >
            {title}
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 3,
              flexGrow: 1,
              fontSize: '0.95rem',
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                  }
                }}
              />
            ))}
          </Box>

          {link && (
            <Button
              variant="contained"
              color="secondary"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={isGithubLink ? <GitHubIcon /> : <LaunchIcon />}
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                alignSelf: 'flex-start',
              }}
            >
              {isGithubLink ? 'View Code' : 'Live Demo'}
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
