import express from 'express';
import {addClientAppointment, allClientAppointments, deleteClientAndDoctorAppointment, allDoctorAppointments, allDoctorRequests, updateDoctorRequestsState, todayAppointment, doctorAvailableAppointments} from '../controllers/appoController.js';
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();

// -------- client
router.post('/clientAppointment/:doctorId',protectRoute,addClientAppointment);
router.get('/clientAppointment' ,protectRoute, allClientAppointments);
// -------- doctor
router.get('/doctorAppointment', protectRoute, allDoctorAppointments);
router.get('/doctorRequests', protectRoute, allDoctorRequests);
router.patch('/doctorRequests/:requestId', protectRoute, updateDoctorRequestsState);
router.get('/doctorTodayAppointments', protectRoute, todayAppointment);
router.get('/doctorAvailableAppointments/:doctorId', protectRoute, doctorAvailableAppointments);

// -------- doctor and client
router.delete('/clinetAndDoctorAppointment/:appointmentId' ,protectRoute, deleteClientAndDoctorAppointment);

export default router