import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import backgroundImage from '../images/signin.jpg';
import axios from 'axios'; 
import '../CSS/SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setError(''); // Reset error message
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', { email, password });
      if (response.data && response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/Home'); // Make sure this route is defined in your React app
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message); // Set error message from response
      } else {
        setError('Sign-in failed. Please try again.'); // Generic error message
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '20px', // Add padding to prevent content from touching the edges
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3, // Margin bottom for spacing
          color: 'white', // Assuming a light tagline color for visibility
          textShadow: '1px 1px 5px rgba(0,0,0,0.7)', // Optional text shadow for readability
          maxWidth: '600px', // Set a max-width for better readability on larger screens
          textAlign: 'center', // Center align the text
          fontWeight: 'bold', // Optional: make it bold
        }}
        
      >Reduce Waste, Reward Generosity - Where every sign-in can save a meal and share a smile
      </Typography>

      {/* Sign-in form container */}
      <Box
        component="form"
        onSubmit={handleSignIn}
        noValidate
        autoComplete="off"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          width: '100%',
          maxWidth: '250px', // You can adjust the width as necessary
          marginBottom: '20px', // Adjust the margin as needed
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Sign In
        </Typography>
        <TextField
          required
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          required
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        {error && (
          <Typography sx={{ mb: 2, color: 'red' }}>
            {error}
          </Typography>
        )}
        {/* Adjust the button's width here */}
        <Button 
          variant="contained" 
          type="submit" 
          sx={{ 
            mb: 2, 
            width: '40%', // Adjusts the button width to 75% of its container
          }}
        >
          Sign In
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link component={RouterLink} to="/SignUp" sx={{ textDecoration: 'none' }}>
            Sign Up
          </Link>
        </Typography>
        <Typography sx={{ textAlign: 'Center' }}>
          Forgot Password?{' '}
          <Link component={RouterLink} to="/ForgotPassword" sx={{ textDecoration: 'none' }}>
            Reset 
          </Link>
        </Typography>
      </Box>
    </Box>

  );
}

export default SignIn;
