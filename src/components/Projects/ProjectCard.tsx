import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

const ProjectCard: React.FC<{ title: string, description: string, link: string | undefined, techUsed: string }> = ({ title, description, link, techUsed }) => {
  return (
    <Card
    sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // Ensure card takes full height of grid item
        minHeight: '250px', // Set a minimum height for consistent size
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.2)', // Subtle outline effect
        },
        backgroundColor: '#30343b',
        borderRadius: 5,
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
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection:'column', justifyContent:'space-around', textAlign: 'left' }}>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
            <CodeIcon sx={{color:'#e0e0e0', border: '1px solid grey', borderRadius: 1, fontSize: '3rem'}}/>
            <Typography padding="16px" variant="h4" component="div" color='#e0e0e0'>
                {title}
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems:'center', pb: 1}}>
            <CodeIcon sx={{color:'#525252', fontSize: '16px'}}/>
            <Typography sx={{ fontSize: '16px', px: 1 }} component="div" color='#525252'>
                {techUsed}
            </Typography>
          </Box>
          <Typography variant="body2" color="#b0b0b0" paragraph>
            {description}
          </Typography>
        </Box>
        {link ? 
            <a href={link} target="_blank" rel="noopener noreferrer">
            <Typography variant="body2" color="#b0b0b0">
                View Project
            </Typography>
            </a>
            : <></>
        }
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
