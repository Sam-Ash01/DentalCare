import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const userName = "Sam Alex";
  const userProfilePicture = "/ClientAvatar.png";

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F2F1FE' }}>
      <Sidebar name={userName} profilePicture={userProfilePicture}/>
      <div className="flex-1 ml-64 p-4">
        {children}
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
}

export default Layout;