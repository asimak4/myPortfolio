import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid, Paper, IconButton, TextField, Snackbar, Alert, Card, CardContent, Divider } from '@mui/material';
import { keyframes } from '@mui/system';
import { aboutMeText } from './aboutMe';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(-30px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
`;


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
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

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
        'service_p4lps1h',
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={aboutRef}
      id="about"
      sx={{
        minHeight: "60vh",
        position: "relative",
        overflow: "hidden",
        py: { xs: 3, md: 4 },
        pb: { xs: 0, md: 0 },
        pt: { xs: 12, md: 12 },
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              animation: isVisible ? `${slideIn} 1s ease-out` : 'none',
              opacity: isVisible ? 1 : 0,
            }}>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: 'secondary.main',
                  letterSpacing: 3,
                  mb: 2,
                  display: 'block',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                ABOUT ME
              </Typography>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 800,
                  mb: 4,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #74B9FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3rem' },
                  lineHeight: 1.2
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
                    borderRadius: 3,
                    px: 5,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 8px 24px rgba(9, 132, 227, 0.3)',
                    background: 'linear-gradient(135deg, #0984E3 0%, #74B9FF 100%)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `${fadeIn} 0.5s ease-out`,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 32px rgba(9, 132, 227, 0.4)',
                    }
                  }}
                >
                  Get In Touch
                </Button>
              ) : showThankYou ? (
                <Card
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 6,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    animation: `${fadeIn} 0.5s ease-out`,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
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
                  </CardContent>
                </Card>
              ) : (
                /* Contact Form */
                <Card
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 6,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    animation: `${fadeIn} 0.5s ease-out`,
                    '& .MuiTypography-root': {
                      color: '#FFFFFF',
                    },
                    '& .MuiTypography-body2': {
                      color: 'rgba(255, 255, 255, 0.85)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
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
                            borderRadius: 3,
                            px: 5,
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            boxShadow: '0 8px 24px rgba(9, 132, 227, 0.3)',
                            background: 'linear-gradient(135deg, #0984E3 0%, #74B9FF 100%)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 12px 32px rgba(9, 132, 227, 0.4)',
                            },
                            '&:disabled': {
                              opacity: 0.6,
                              transform: 'none',
                            }
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  </CardContent>
                </Card>
              )}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              {highlights.map((highlight, index) => (
                <Grid item xs={12} key={highlight.title}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(255, 255, 255, 0.02)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: 6,
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      animation: `${fadeIn} 1s ease-out ${index * 0.2}s backwards`,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)',
                        transition: 'left 0.5s ease-in-out',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(9, 132, 227, 0.3)',
                        boxShadow: '0 20px 40px rgba(9, 132, 227, 0.1)',
                        '&::before': {
                          left: '100%',
                        },
                        '& .highlight-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          bgcolor: 'secondary.light',
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        gap: 2,
                        mb: 2 
                      }}>
                        <IconButton
                          className="highlight-icon"
                          sx={{
                            bgcolor: 'secondary.main',
                            color: 'white',
                            transition: 'all 0.3s ease-in-out',
                            boxShadow: '0 4px 12px rgba(9, 132, 227, 0.3)',
                            '&:hover': { bgcolor: 'secondary.main' },
                          }}
                        >
                          {highlight.icon}
                        </IconButton>
                        <Box sx={{ flex: 1 }}>
                          <Typography 
                            variant="h6" 
                            gutterBottom 
                            sx={{ 
                              fontWeight: 700,
                              color: 'white',
                              fontSize: '1.25rem',
                              mb: 1
                            }}
                          >
                            {highlight.title}
                          </Typography>
                          <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', mb: 2 }} />
                          <Typography 
                            variant="body1" 
                            sx={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '0.95rem',
                              lineHeight: 1.6
                            }}
                          >
                            {highlight.description}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
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
