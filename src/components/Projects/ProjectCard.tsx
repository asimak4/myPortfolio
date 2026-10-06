import React from 'react';
import { Card, CardContent, Typography, Box, Button, Chip, Stack, Divider } from '@mui/material';
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
        bgcolor: '#0D110F',
        borderRadius: 0,
        border: '1px solid rgba(243, 239, 228, 0.12)',
        borderTop: '2px solid rgba(91, 127, 208, 0.85)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.35s ease, border-color 0.35s ease, background-color 0.35s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 120,
          height: 120,
          right: -60,
          top: -60,
          border: '1px solid rgba(91, 127, 208, 0.24)',
          borderRadius: '50%',
          transition: 'transform 0.5s ease',
        },
        '&:hover': {
          transform: 'translateY(-6px)',
          bgcolor: '#111714',
          borderColor: 'rgba(91, 127, 208, 0.42)',
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.28)',
          '&::before': {
            transform: 'scale(1.3)',
          },
          '& .project-icon': {
            transform: 'rotate(-8deg)',
            color: 'secondary.main',
          },
          '& .tech-chip': {
            color: 'primary.main',
          },
          '& .project-content': {
            transform: 'translateY(-2px)',
          }
        },
      }}
    >
      <CardContent sx={{ height: '100%', p: 0, position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Header Section */}
          <Box sx={{ 
            p: 3, 
            pb: 2.5,
            background: 'transparent',
            borderBottom: '1px solid rgba(243, 239, 228, 0.1)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
              <Box
                className="project-icon"
                sx={{ 
                  width: 40,
                  height: 40,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '50%',
                  bgcolor: 'transparent',
                  color: 'text.secondary',
                  border: '1px solid rgba(243, 239, 228, 0.16)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <CodeIcon sx={{ fontSize: '1.5rem' }} />
              </Box>
              <Typography sx={{ color: 'secondary.main', fontFamily: '"IBM Plex Mono", monospace', fontSize: '0.62rem', letterSpacing: '0.12em' }}>
                CASE STUDY ↗
              </Typography>
            </Box>
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ 
                color: 'primary.main',
                fontFamily: '"Bodoni Moda", serif',
                fontWeight: 500,
                mb: 1,
                fontSize: '1.8rem',
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
                color: 'text.secondary',
                mb: 3,
                flexGrow: 1,
                fontSize: '0.95rem',
                lineHeight: 1.7,
                fontWeight: 400
              }}
            >
              {description}
            </Typography>

            <Divider sx={{ bgcolor: 'rgba(243, 239, 228, 0.1)', mb: 2 }} />
            
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1, 
              mb: 3,
              '& .tech-chip': {
                transition: 'color 0.3s ease-in-out',
              }
            }}>
              {technologies.map((tech, index) => (
                <Chip
                  key={tech}
                  label={tech}
                  className="tech-chip"
                  size="small"
                  sx={{ 
                    bgcolor: 'transparent',
                    color: 'text.secondary',
                    border: '1px solid rgba(243, 239, 228, 0.14)',
                    fontWeight: 500,
                    fontFamily: '"IBM Plex Mono", monospace',
                    fontSize: '0.75rem',
                    transitionDelay: `${index * 0.05}s`,
                    '&:hover': {
                      color: 'secondary.main',
                      bgcolor: 'rgba(91, 127, 208, 0.08)',
                      borderColor: 'rgba(91, 127, 208, 0.4)',
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
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    py: 1,
                    px: 2.5,
                    color: '#090C0B',
                    boxShadow: 'none',
                    background: 'secondary.main',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      background: 'secondary.light',
                      boxShadow: '0 8px 24px rgba(91, 127, 208, 0.22)',
                    }
                  }}
                >
                  {link.includes('github.com') ? 'Code' : 'Website'}
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
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          py: 1,
                          px: type === 'github' ? 2.5 : 1.5,
                          minWidth: type === 'github' ? 'auto' : '44px',
                          ...(type === 'github' && {
                            color: '#090C0B',
                            boxShadow: 'none',
                            background: 'secondary.main',
                          }),
                          ...(type !== 'github' && {
                            color: 'secondary.main',
                            border: '1px solid rgba(91, 127, 208, 0.45)',
                            bgcolor: 'transparent',
                          }),
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            ...(type === 'github' && {
                              background: 'secondary.light',
                              boxShadow: '0 8px 24px rgba(91, 127, 208, 0.22)',
                            }),
                            ...(type !== 'github' && {
                              bgcolor: 'rgba(91, 127, 208, 0.1)',
                              borderColor: 'secondary.main',
                            })
                          }
                        }}
                      >
                        {type === 'github' ? 'Github' : getIcon(type)}
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
