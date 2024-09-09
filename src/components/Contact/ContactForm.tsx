import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';

const generateMathProblem = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = Math.random() > 0.5 ? '+' : '-';
  let answer = 0;

  if (operator === '+') {
    answer = num1 + num2;
  } else {
    answer = num1 - num2;
  }

  return { problem: `${num1} ${operator} ${num2}`, answer };
};

const ContactForm: React.FC = () => {
  const [mathProblem, setMathProblem] = useState<{ problem: string; answer: number }>({ problem: '', answer: 0 });
  const [userAnswer, setUserAnswer] = useState<number | string>('');
  const [formValues, setFormValues] = useState<{ name: string; email: string; message: string }>({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setMathProblem(generateMathProblem());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userAnswer === mathProblem.answer) {
      setSuccess(true);
      setError(null);
      // Handle successful form submission (e.g., send an email or save to database)
      console.log('Form Data:', formValues);
    } else {
      setSuccess(false);
      setError('Incorrect answer. Please try again.');
    }
  };

  return (
    <Box id='contact' sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
          width: '100%',
          maxWidth: 600,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#007bff', textAlign: 'center' }}>
          Contact Me!
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">Form submitted successfully!</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            margin="normal"
            required
            sx={{}}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={{}}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleChange}
            margin="normal"
            required
            sx={{}}
          />
          <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', marginY: 2 }}>
            Solve this problem: <strong>{mathProblem.problem}</strong>
          </Typography>
          <TextField
            fullWidth
            label="Your Answer"
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(parseInt(e.target.value))}
            margin="normal"
            required
            sx={{}}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2,
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
