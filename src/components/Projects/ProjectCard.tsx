import React from 'react';
import { Card, CardContent, Typography, Box, Button, IconButton, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

interface Links {
  github?: string;
  android?: string;
  ios?: string;
  [key: string]: string | undefined;
}

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  links?: Links;
  techUsed: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, links, techUsed }) => {
  const technologies = techUsed.split(',').map(tech => tech.trim());

  const getIcon = (linkType: string) => {
    switch(linkType) {
      case 'github':
        return <GitHubIcon />;
      case 'android':
        return <AndroidIcon />;
      case 'ios':
        return <AppleIcon />;
      default:
        return <LaunchIcon />;
    }
  };

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

          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1, 
            mt: 2,
            '& .tech-chip': {
              transform: 'translateY(10px)',
              opacity: 0,
              transition: 'all 0.3s ease-in-out',
            }
          }}>
            {technologies.map((tech, index) => (
              <Chip
                key={tech}
                label={tech}
                className="tech-chip"
                sx={{ 
                  bgcolor: 'rgba(9, 132, 227, 0.1)',
                  color: 'secondary.light',
                  transitionDelay: `${index * 0.1}s`,
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
              startIcon={link.includes('github.com') ? <GitHubIcon /> : <LaunchIcon />}
              size="small"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                alignSelf: 'flex-start',
                fontSize: '0.8rem',
                py: 0.5,
                minWidth: 'auto'
              }}
            >
              {link.includes('github.com') ? 'View Code' : 'Live Demo'}
            </Button>
          )}

          {links && (
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: link ? 1 : 0, gap: 1 }}>
              {Object.entries(links).map(([type, url]) => (
                url && (
                  <Button
                    key={type}
                    variant="contained"
                    color="secondary"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={type === 'github' ? getIcon(type) : undefined}
                    size="small"
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      py: 0.5,
                      minWidth: type === 'github' ? 'auto' : '32px',
                      px: type === 'github' ? 2 : 1
                    }}
                  >
                    {type === 'github' ? 'View Code' : getIcon(type)}
                  </Button>
                )
              ))}
            </Stack>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
