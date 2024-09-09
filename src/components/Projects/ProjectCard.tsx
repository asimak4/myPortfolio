import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const ProjectCard: React.FC<{ title: string, description: string, link: string | undefined, techUsed: string }> = ({ title, description, link, techUsed }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0px 0px 12px rgba(0, 248, 130, 0.9)',
        },
        backgroundColor: '#30343b',
        borderRadius: 2,
        // padding: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <CodeIcon sx={{ color: '#e0e0e0', border: '1px solid grey', borderRadius: 1, fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' } }} />
            <Typography padding="16px" variant="h5" component="div" color='#e0e0e0' sx={{ fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' } }}>
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pb: 1 }}>
            <CodeIcon sx={{ color: '#525252', fontSize: { xs: '14px', sm: '16px' } }} />
            <Typography sx={{ fontSize: { xs: '14px', sm: '16px' }, px: 1 }} component="div" color='#525252'>
              {techUsed}
            </Typography>
          </Box>
          <Typography variant="body2" color="#b0b0b0" paragraph sx={{ fontSize: { xs: '0.575rem', sm: '.8rem' } }}>
            {description}
          </Typography>
        </Box>
        {link ? 
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small" sx={{ backgroundColor: '#00b0ff', color: '#fff', '&:hover': { backgroundColor: '#0088cc' } }}>
              View Project
            </Button>
          </a>
          : null
        }
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
