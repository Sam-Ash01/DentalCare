import React from 'react';
import './App.css';
import Homepage from './Component/Homepage';
import Community from './pages/Log-in/Community';
import SignupDoctor from './pages/Log-in/SignupDoctor';
import SignupClient from './pages/Log-in/SignupClient';
import Login from './pages/Log-in/Login';
import ClientdashboardHome from './pages/ClientPages/ClientdashboardHome';
import ClientDashboardBookAppointment from './pages/ClientPages/ClientDashboardBookAppointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import DoctordashboardHome from './pages/DoctorPages/DoctordashboardHome';
import DoctordashboardAppointments from './pages/DoctorPages/DoctordashboardAppointments';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/community" element={<Community />} />
          <Route path='/SignupDoctor' element={<SignupDoctor />} />
          <Route path='/SignupClient' element={<SignupClient />} />
          <Route path='/Login' element={<Login />} />
            {/* Client Dashboard */}
            <Route path="ClientdashboardHome" element={<ClientdashboardHome />} />
            <Route path="ClientDashboardBookAppointment" element={<ClientDashboardBookAppointment />} />
            {/* OutLet */}
            <Route path="/" element={<Layout />}>
            {/* Doctor Dashboard */}
            <Route path='DoctorDashboardHome' element={<DoctordashboardHome/>}/>
            <Route path='DoctorDashboardAppointments' element={<DoctordashboardAppointments/>}/>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
