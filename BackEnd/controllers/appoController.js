import Appointment from '../models/appointmentModel.js';
import User from '../models/userModel.js';

export const addAppointment = async (req, res) => {
        try {
        const { doctorId } = req.params;
    const { service, state, date, time, description, location } = req.body;
    const userId = req.user._id;
    
    const newAppointment = new Appointment({
        doctorId,
        userId,
        service,
        state,
        date,
        time,
        description,
        location
    })
    newAppointment.save();
    res.status(200).json({ newAppointment });
} catch (e) {
    res.send(err.message)
}
}

export const allAppointments = async (req, res) => {
    try{
        const userId = req.user._id;
    let clientAppointments = await Appointment.find({ userId });
    res.status(200).json({ clientAppointments });
} catch (e) {
    res.send(e.message)
}
}

export const deleteAppointment = async (req, res) => {
    try {
        const {appointmentId} = req.params;
        const checkAppointment = await Appointment.findOne({ appointmentId })
        if(checkAppointment){
        if(req.user._id){
            const removeAppointment = await Appointment.findByIdAndDelete( appointmentId )
            res.status(200).json({ message: 'Appointment deleted successfully' })
        }else{
            res.json({ message: 'invalid user' })
        }
    }else{
        res.status(404).json({ message: 'appointment not found' })
    }
    } catch (e) {
        res.send(e.message)
    }
}
