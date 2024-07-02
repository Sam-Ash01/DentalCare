import express from 'express';
import {addClientAppointment, allClientAppointments, deleteClientAppointment, allDoctorAppointments, allDoctorRequests} from '../controllers/appoController.js';
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

// -------- client
router.post('/clientAppointment/:doctorId',protectRoute,addClientAppointment);
router.get('/clientAppointment' ,protectRoute, allClientAppointments);
router.delete('/clinetAppointment/:appointmentId' ,protectRoute, deleteClientAppointment);
// -------- doctor
router.get('/doctorAppointment', protectRoute, allDoctorAppointments);
router.get('/doctorRequests', protectRoute, allDoctorRequests);

export default router