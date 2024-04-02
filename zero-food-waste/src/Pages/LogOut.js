import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/LogOut.css'

function LogOut() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/signin'); // Adjust the route as needed for your sign-in page
  };

  return (
    <div className='logoutContainer' >
      <h1 >You have been successfully logged out.</h1>
      <button onClick={handleLoginRedirect}>
        Log Back In
      </button>
    </div>
  );
}

export default LogOut;