import Appointment from '../models/appointmentModel.js';
// import User from '../models/userModel.js';

export const addAppointment = async (req, res) => {
    const { doctorId } = req.params;
    const { service, state, date, time, description, location } = req.body;
    const userId = req.user._id;
    
    // let findDoctor = await User.findOne({ doctorId });

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
}