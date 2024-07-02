import express from 'express'
import protectRoute from '../middlewares/protectRoute.js'
import { getAllClients, getAllDoctors } from '../controllers/userController.js'

const router = express.Router()

router.get('/clients' , protectRoute , getAllClients)
router.get('/doctors',protectRoute ,getAllDoctors )

export default router