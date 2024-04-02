import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Ensure useNavigate is imported
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import axios from 'axios'; // Ensure axios is imported
import validator from 'validator';
import '../CSS/SignUp.css';

function SignUp() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message
    
    if (!validator.isEmail(user.email)) {
      setError('Invalid email address');
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', user);
      console.log(response.data); // You can use the response data for further actions
      navigate('/signin'); // Redirect to sign-in page upon successful sign-up
    } catch (error) {
      console.error('Signup error:', error);
      if (error.response && error.response.data) {
        setError(error.response.data.message); // Set error message from response
      } else {
        setError('Sign-up failed. Please try again.'); // Generic error message
      }
    }
  };
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f8fa',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          width: '100%',
          maxWidth: '250px', 
          marginBottom: '50px',
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <TextField
          required
          name="firstName"
          label="First Name"
          value={user.firstName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          required
          name="lastName"
          label="Last Name"
          value={user.lastName}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          required
          name="email"
          label="Email Address"
          type="email"
          value={user.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          error={!!error} // Show error state if there is an error message
          helperText={error} // Display error message
        />
        <TextField
          required
          name="password"
          label="Password"
          type="password"
          value={user.password}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" 
          type="submit" 
          sx={{ 
            mb: 2, 
            width: '40%', 
          }}
        >
          Sign Up
        </Button>
        <Typography>
          Already have an account?{' '}
          <Link component={RouterLink} to="/signin">
            Sign in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUp;
