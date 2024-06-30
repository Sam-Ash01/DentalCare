import React from 'react';
import Side from './Side';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  const userName = "Chris Rovr";
  const userProfilePicture = "/DoctorAvatar.png";

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F2F1FE' }}>
      <Side name={userName} profilePicture={userProfilePicture}/>
      <div className="flex-1 ml-64 p-4">
        {children}
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
}

export default Layout;