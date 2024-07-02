import React from 'react';
import './App.css';
import Homepage from './Component/Homepage';
import Community from './pages/Log-in/Community';
import SignupDoctor from './pages/Log-in/SignupDoctor';
import Dentalform from './pages/Log-in/Dentalform';
import SignupClient from './pages/Log-in/SignupClient';
import Login from './pages/Log-in/Login';
import Resetpass from './pages/Log-in/Resetpass';
import ClientdashboardHome from './pages/ClientPages/ClientdashboardHome';
import ClientDashboardBookAppointment from './pages/ClientPages/ClientDashboardBookAppointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import LayoutClient from './Component/LayoutClient';
import DoctordashboardHome from './pages/DoctorPages/DoctordashboardHome';
import DoctordashboardAppointments from './pages/DoctorPages/DoctordashboardAppointments';
import { TokenProvider } from './Component/TokenProvider';
import ProtectedRoute from './Component/ProtectedRoute';
import ClientdashboardAppointments from './pages/ClientPages/ClientdashboardAppointments';

function App() {
  return (
    <div className="App">
      <TokenProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/community" element={<Community />} />
            <Route path='/SignupDoctor' element={<SignupDoctor />} />
            <Route path='/Dentalform' element={<Dentalform />} />
            <Route path='/SignupClient' element={<SignupClient />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Resetpass' element={<Resetpass />} />
            <Route element={<ProtectedRoute />} />
            {/* Client Dashboard */}
            <Route path="/" element={<LayoutClient />}>
              <Route path="ClientdashboardHome" element={<ClientdashboardHome />} />
              <Route path="ClientDashboardBookAppointment" element={<ClientDashboardBookAppointment />} />
              <Route path="ClientdashboardAppointments" element={<ClientdashboardAppointments />} />
            </Route>
            <Route path="/" element={<Layout />}>
              {/* Doctor Dashboard */}
              <Route path='DoctorDashboardHome' element={<DoctordashboardHome />} />
              <Route path='DoctorDashboardAppointments' element={<DoctordashboardAppointments />} />

            </Route>
          </Routes>
        </Router>
      </TokenProvider>
    </div >
  );
}

export default App;
