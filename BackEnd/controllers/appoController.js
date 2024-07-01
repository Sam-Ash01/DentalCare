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