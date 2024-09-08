import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { experiences } from './workExperience'; // Your array of experiences

const Experience: React.FC = () => {
  // Initialize state with the indices of the accordions that should be expanded by default
  const [expanded, setExpanded] = useState<number[]>(experiences
    .map((exp, index) => exp.expanded ? index : -1)
    .filter(index => index !== -1)
  );

  // Handle accordion change
  const handleChange = (index: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(prev => {
      if (isExpanded) {
        return [...prev, index]; // Add to expanded state if expanding
      } else {
        return prev.filter(i => i !== index); // Remove from expanded state if collapsing
      }
    });
  };

  return (
    <Box
      id='experience'
      sx={{
        padding: '0 20px',
        backgroundColor: '#22333B',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        color: '#fff'
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ marginBottom: '40px', pt: 10, fontWeight: 'bold' }}>
        Work Experience
      </Typography>

      {experiences.map((experience, index) => (
        <Accordion
          key={index}
          expanded={expanded.includes(index)} // Control expanded state based on array
          onChange={handleChange(index)}
          sx={{
            width: '100%',
            maxWidth: '800px',
            marginBottom: '15px',
            borderRadius: '10px',
            backgroundColor: '#1c313a',
            color: '#fff',
            '&:before': {
              display: 'none', // Remove the default MUI divider
            },
            '&:hover': {
              boxShadow: '0px 0px 12px rgba(0, 200, 255, 0.3)', // Subtle hover effect
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#00f882' }} />}
            sx={{
              backgroundColor: '#263238',
              borderRadius: '10px',
              '& .MuiAccordionSummary-content': {
                margin: '8px 0',
                alignItems: 'center'
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#b2b2b2' }}>
              {experience.role} at {experience.company}
            </Typography>
            <Typography sx={{ marginLeft: 'auto', color: '#b0b0b0', fontSize: '12px' }}>
              {experience.duration}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#1e272e',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: '#b0b0b0', marginBottom: '10px' }}>
              {experience.location}
            </Typography>
            <ul>
              {experience.bullets.map((bullet, i) => (
                <li key={i} style={{ marginBottom: '10px', color: '#b0b0b0' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Experience;
