import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Include Outlet in the import
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavAndSidebar = !['/signin', '/signup', '/logout'].includes(location.pathname);

  return (
    <>
      {showNavAndSidebar && <Navbar />}
      {showNavAndSidebar && <Sidebar />}
      <main style={{ marginLeft: showNavAndSidebar ? '200px' : '0' }}>
        <Outlet /> {/* Now Outlet is imported and can be used */}
      </main>
    </>
  );
};

export default Layout;
