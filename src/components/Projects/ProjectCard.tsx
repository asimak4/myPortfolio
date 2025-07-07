import React from 'react';
import { Card, CardContent, Typography, Box, Button, IconButton, Chip, Stack, Divider } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
  const [isHovered, setIsHovered] = React.useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)',
        borderRadius: 6,
        border: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
          transition: 'left 0.5s ease-in-out',
        },
        '&:hover': {
          transform: 'translateY(-2px) scale(1.02)',
          bgcolor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(9, 132, 227, 0.3)',
          boxShadow: '0 25px 50px rgba(9, 132, 227, 0.15), 0 0 0 1px rgba(9, 132, 227, 0.1)',
          '&::before': {
            left: '100%',
          },
          '& .project-icon': {
            transform: 'rotate(10deg) scale(1.15)',
            bgcolor: 'secondary.light',
          },
          '& .tech-chip': {
            transform: 'translateY(0)',
            opacity: 1,
          },
          '& .project-content': {
            transform: 'translateY(-4px)',
          }
        },
      }}
    >
      <CardContent sx={{ height: '100%', p: 0, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Header Section */}
          <Box sx={{ 
            p: 3, 
            pb: 2,
            background: 'linear-gradient(135deg, rgba(9, 132, 227, 0.1) 0%, rgba(9, 132, 227, 0.05) 100%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <IconButton 
                className="project-icon"
                sx={{ 
                  bgcolor: 'secondary.main',
                  color: 'white',
                  size: 'large',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 12px rgba(9, 132, 227, 0.3)',
                  '&:hover': { bgcolor: 'secondary.dark' }
                }}
              >
                <CodeIcon sx={{ fontSize: '1.5rem' }} />
              </IconButton>
            </Box>
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                color: 'white',
                fontWeight: 700,
                mb: 1,
                fontSize: '1.5rem',
                lineHeight: 1.2
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* Content Section */}
          <Box className="project-content" sx={{ 
            p: 3, 
            pt: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1,
            transition: 'transform 0.3s ease-in-out'
          }}>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                mb: 3,
                flexGrow: 1,
                fontSize: '0.95rem',
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              {description}
            </Typography>

            <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
            
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1, 
              mb: 3,
              '& .tech-chip': {
                transform: 'translateY(10px)',
                opacity: 0.7,
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              {technologies.map((tech, index) => (
                <Chip
                  key={tech}
                  label={tech}
                  className="tech-chip"
                  size="small"
                  sx={{ 
                    bgcolor: 'rgba(9, 132, 227, 0.15)',
                    color: 'secondary.light',
                    border: '1px solid rgba(9, 132, 227, 0.2)',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    transitionDelay: `${index * 0.05}s`,
                    '&:hover': {
                      bgcolor: 'rgba(9, 132, 227, 0.25)',
                      transform: 'translateY(-2px)',
                    }
                  }}
                />
              ))}
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 'auto' }}>
              {link && (
                <Button
                  variant="contained"
                  color="secondary"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={link.includes('github.com') ? <GitHubIcon /> : <LaunchIcon />}
                  sx={{
                    borderRadius: 3,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    py: 1,
                    px: 2.5,
                    boxShadow: '0 4px 12px rgba(9, 132, 227, 0.3)',
                    background: 'linear-gradient(135deg, #0984E3 0%, #74B9FF 100%)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(9, 132, 227, 0.4)',
                    }
                  }}
                >
                  {link.includes('github.com') ? 'View Code' : 'Live Demo'}
                </Button>
              )}

              {links && (
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                  {Object.entries(links).map(([type, url]) => (
                    url && (
                      <Button
                        key={type}
                        variant={type === 'github' ? 'contained' : 'outlined'}
                        color="secondary"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={type === 'github' ? getIcon(type) : undefined}
                        sx={{
                          borderRadius: 3,
                          textTransform: 'none',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          py: 1,
                          px: type === 'github' ? 2.5 : 1.5,
                          minWidth: type === 'github' ? 'auto' : '44px',
                          ...(type === 'github' && {
                            boxShadow: '0 4px 12px rgba(9, 132, 227, 0.3)',
                            background: 'linear-gradient(135deg, #0984E3 0%, #74B9FF 100%)',
                          }),
                          ...(type !== 'github' && {
                            border: '1px solid rgba(9, 132, 227, 0.5)',
                            bgcolor: 'rgba(9, 132, 227, 0.1)',
                          }),
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            ...(type === 'github' && {
                              boxShadow: '0 6px 20px rgba(9, 132, 227, 0.4)',
                            }),
                            ...(type !== 'github' && {
                              bgcolor: 'rgba(9, 132, 227, 0.2)',
                              border: '1px solid rgba(9, 132, 227, 0.7)',
                            })
                          }
                        }}
                      >
                        {type === 'github' ? 'View Code' : getIcon(type)}
                      </Button>
                    )
                  ))}
                </Stack>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
