import express from 'express';
import {addAppointment, allAppointments} from '../controllers/appoController.js';
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();


router.post('/addAppointment/:doctorId',protectRoute,addAppointment);
router.get('/addAppointment' ,protectRoute, allAppointments);

export default router