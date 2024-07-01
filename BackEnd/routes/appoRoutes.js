import express from 'express';
import {addAppointment} from '../controllers/appoController.js';
import protectRoute from '../middlewares/protectRoute.js';


const router = express.Router();


router.post('/addAppointment/:doctorId',protectRoute,addAppointment);
router.get('/addAppointment', (req, res) => {
    res.send('appointment added')
})

export default router