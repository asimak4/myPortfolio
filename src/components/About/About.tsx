import React, { useState } from 'react';
import { Box, Typography, Button, Container, Grid, Paper, IconButton, TextField, Snackbar, Alert } from '@mui/material';
import { keyframes } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import FloatingDecorations from '../shared/FloatingDecorations';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const aboutMeText = `I'm a passionate Full Stack Developer with a keen interest in building scalable web applications. 
With a strong foundation in both front-end and back-end development, I enjoy tackling complex problems and turning ideas into reality through clean, efficient code.`;

const highlights = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Full Stack Development",
    description: "Experienced in building end-to-end web applications using modern technologies"
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    title: "Continuous Learning",
    description: "Always staying updated with the latest technologies and best practices"
  },
  {
    icon: <WorkIcon fontSize="large" />,
    title: "Problem Solver",
    description: "Passionate about finding elegant solutions to complex challenges"
  }
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

const About: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      setSnackbar({
        open: true,
        message: 'Please verify that you are not a robot',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        'service_8wm284d',
        'template_w9qi8ua',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Alexander',
        },
        'Bj-Dt8DjkXbIxefag'
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setFormData({ name: '', email: '', message: '' });
      setCaptchaVerified(false);
      setShowForm(false);
      setShowThankYou(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 6 },
      }}
    >
      <FloatingDecorations variant="secondary" />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ animation: `${fadeIn} 1s ease-out` }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'secondary.main',
                  letterSpacing: 2,
                  mb: 2,
                  display: 'block'
                }}
              >
                ABOUT ME
              </Typography>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  fontWeight: 'bold',
                  mb: 4,
                  color: '#FFFFFF',
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #E5E9F0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Turning Vision Into Reality
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                {aboutMeText}
              </Typography>

              {!showForm && !showThankYou ? (
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<EmailIcon />}
                  onClick={() => setShowForm(true)}
                  sx={{ 
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    animation: `${fadeIn} 0.5s ease-out`,
                  }}
                >
                  Contact Me
                </Button>
              ) : showThankYou ? (
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    textAlign: 'center',
                    animation: `${fadeIn} 0.5s ease-out`,
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: 'secondary.light',
                      color: 'secondary.main',
                      mb: 2,
                      '&:hover': { bgcolor: 'secondary.light' },
                    }}
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    Thank You for Reaching Out!
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    I appreciate your message and will get back to you as soon as possible.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setShowThankYou(false);
                      setShowForm(false);
                    }}
                  >
                    Close
                  </Button>
                </Paper>
              ) : (
                /* Contact Form */
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 4,
                    animation: `${fadeIn} 0.5s ease-out`,
                    '& .MuiTypography-root': {
                      color: '#FFFFFF',
                    },
                    '& .MuiTypography-body2': {
                      color: 'rgba(255, 255, 255, 0.85)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Get in Touch
                    </Typography>
                    <IconButton 
                      onClick={() => setShowForm(false)}
                      size="small"
                      sx={{ color: 'text.secondary' }}
                    >
                      ×
                    </IconButton>
                  </Box>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ mb: 2 }}>
                          <ReCAPTCHA
                            sitekey="6LfBrZ8qAAAAAIT9rKc5hR-qkVBBOajLzA8WsFWH"
                            onChange={handleCaptchaChange}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          disabled={loading || !captchaVerified}
                          startIcon={<SendIcon />}
                          sx={{ 
                            mt: 2,
                            borderRadius: 2,
                            px: 4,
                            py: 1.5,
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              )}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} key={highlight.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: 'background.paper',
                      borderRadius: 4,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconButton
                        sx={{
                          bgcolor: 'secondary.light',
                          color: 'secondary.main',
                          '&:hover': { bgcolor: 'secondary.light' },
                        }}
                      >
                        {highlight.icon}
                      </IconButton>
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          {highlight.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {highlight.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default About;
