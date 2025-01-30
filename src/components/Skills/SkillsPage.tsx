import React from 'react';
import { Grid, Typography, Chip, Paper, Box, Container, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import { skillsList, hobbiesList } from './SkillsandHobbies';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import CloudIcon from '@mui/icons-material/Cloud';
import BrushIcon from '@mui/icons-material/Brush';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PublicIcon from '@mui/icons-material/Public';
import SportsIcon from '@mui/icons-material/Sports';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FloatingDecorations from '../shared/FloatingDecorations';
import TravelGlobe from './TravelGlobe';
import SlidingPuzzle from './ColorMatch';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

// Map category names to icons
const categoryIcons: { [key: string]: React.ReactNode } = {
  'Frontend': <WebIcon />,
  'Backend': <StorageIcon />,
  'Languages': <CodeIcon />,
  'Tools': <BuildIcon />,
  'Cloud': <CloudIcon />,
  'Design': <BrushIcon />,
};

const SkillsPage = () => {
  return (
    <Box
      id="skills"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
        pt: { xs: 12, md: 12 },
        scrollMarginTop: "80px",
      }}
    >
      <FloatingDecorations variant="quaternary" />
      <Container maxWidth="lg">
        <Box 
          id="technical-skills"
          sx={{ 
            textAlign: 'left', 
            width: '100%', 
            mb: 8, 
            animation: `${fadeIn} 1s ease-out`,
            scrollMarginTop: "80px"
          }}
        >
          <Typography 
            variant="overline" 
            sx={{ 
              color: 'secondary.main',
              letterSpacing: 2,
              mb: 2,
              display: 'block'
            }}
          >
            EXPERTISE
          </Typography>
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'white',
              mb: 3,
            }}
          >
            Skills & Technologies
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              mb: 4,
            }}
          >
            A comprehensive overview of my technical skills and areas of expertise.
          </Typography>
        </Box>

        {/* Technical Skills */}
        <Grid container spacing={3}>
          {Object.entries(skillsList).map(([category, items], index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={4} 
              key={category}
              sx={{
                animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 12px 30px rgba(9, 132, 227, 0.15)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <IconButton
                      sx={{
                        bgcolor: 'secondary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'secondary.dark' },
                      }}
                    >
                      {categoryIcons[category] || <CodeIcon />}
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                      }}
                    >
                      {category}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {items.map((item, i) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                          animation: `${scaleIn} 0.5s ease-out ${index * 0.2 + i * 0.1}s backwards`,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Hobbies Section */}
        <Box 
          id="hobbies"
          sx={{ 
            mt: 8,
            animation: `${fadeIn} 1s ease-out 0.6s backwards`,
            scrollMarginTop: "80px"
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              color: 'white',
              fontWeight: 600,
              mb: 3,
            }}
          >
            <IconButton
              sx={{
                bgcolor: 'secondary.main',
                color: 'white',
                mr: 2,
                '&:hover': { bgcolor: 'secondary.dark' },
              }}
            >
              <SportsEsportsIcon />
            </IconButton>
            Hobbies & Interests
          </Typography>

          <Grid container spacing={3}>
            {/* Travel Section */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                component="div"
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    <PublicIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Travel
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.6 }}>
                  Passionate about exploring new places and cultures. I've been fortunate to visit multiple countries across Europe and the Americas, with many more destinations on my wishlist.
                </Typography>
                <Box sx={{ height: '400px' }}>
                  <TravelGlobe />
                </Box>
              </Paper>
            </Grid>

            {/* Gaming Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    <SportsEsportsIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Gaming
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.6 }}>
                  Puzzle games are my favorite genre, but I grew up playing FIFA due to my love for soccer. I also enjoy FPS games like Apex and Call of Duty for gaming sessions with friends.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['FIFA', 'Apex Legends', 'Call of Duty', 'Rachet & Clank', 'Mini Motorways'].map((game, index) => (
                      <Chip
                        key={game}
                        label={game}
                        component="div"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                          animation: `${scaleIn} 0.5s ease-out ${0.8 + index * 0.1}s backwards`,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Box>
                  <Box sx={{ flexGrow: 1, minHeight: 0 }}>
                    <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>
                      Try Sliding Puzzle! 🧩
                    </Typography>
                    <Box sx={{ height: 'calc(100% - 28px)' }}>
                      <SlidingPuzzle />
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Sports & Fitness Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    <SportsIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Sports & Fitness
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.6 }}>
                  Fitness is a cornerstone of my daily life. I train 6 times a week, focusing on strength training and progressive overload. When not in the gym, I enjoy playing various sports to stay active. Recently got into golf and achieved a hole-in-one on a 200-yard par 3 - a moment I'll never forget!
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[
                      { name: 'Soccer', icon: '⚽' },
                      { name: 'Football', icon: '🏈' },
                      { name: 'Weight Training', icon: '🏋️‍♂️' },
                      { name: 'Running', icon: '🏃‍♂️' },
                      { name: 'Golf', icon: '🏌️‍♂️' },
                      { name: 'Calisthenics', icon: '💪' }
                    ].map((sport, index) => (
                      <Chip
                        key={sport.name}
                        label={`${sport.icon} ${sport.name}`}
                        component="div"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                          animation: `${scaleIn} 0.5s ease-out ${0.8 + index * 0.1}s backwards`,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    <img 
                      src="https://logos-world.net/wp-content/uploads/2020/05/Baltimore-Ravens-logo.png" 
                      alt="Ravens Logo" 
                      style={{ height: '60px' }}
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" 
                      alt="Chelsea Logo" 
                      style={{ height: '60px' }}
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/1/17/United_States_Soccer_Federation_logo_2016.svg" 
                      alt="U.S Mens Soccer" 
                      style={{ height: '60px' }}
                    />
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Paper
                      sx={{
                        p: 3,
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="subtitle2" sx={{ color: 'white', mb: 2, textAlign: 'center' }}>
                        Personal Records 💪
                      </Typography>
                      <Box sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5
                      }}>
                        {[
                          { name: 'Deadlift', weight: 460 },
                          { name: 'Bench', weight: 315 },
                          { name: 'Squat', weight: 355 },
                          { name: 'OHP', weight: 185 }
                        ].map((lift) => (
                          <Box
                            key={lift.name}
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              borderBottom: '1px solid rgba(255,255,255,0.1)',
                              pb: 1
                            }}
                          >
                            <Typography variant="body2" sx={{ color: 'white' }}>
                              {lift.name}
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                              {lift.weight}<Typography component="span" variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', ml: 1 }}>lbs</Typography>
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Paper>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Cooking Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'white',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    <RestaurantIcon />
                  </IconButton>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                    Cooking
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.6 }}>
                  My cooking style revolves around high-protein meals to support my fitness goals. I have a sweet spot for baking, especially perfecting my cookie recipes, while keeping everything nutritious and delicious.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {[
                      { name: 'Protein-Rich Diet', icon: '🥩' },
                      { name: 'Cookie Master', icon: '🍪' },
                      { name: 'Meal Prep', icon: '🥘' },
                      { name: 'Greek Yogurt', icon: '🥛' },
                      { name: 'Eggs & Omelettes', icon: '🍳' },
                      { name: 'Protein Brownies', icon: '🍫' },
                      { name: 'Banana Bread', icon: '🍌' }
                    ].map((item, index) => (
                      <Chip
                        key={item.name}
                        label={`${item.icon} ${item.name}`}
                        component="div"
                        sx={{
                          bgcolor: 'rgba(255,255,255,0.1)',
                          color: 'white',
                          animation: `${scaleIn} 0.5s ease-out ${0.8 + index * 0.1}s backwards`,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-2px)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsPage;
